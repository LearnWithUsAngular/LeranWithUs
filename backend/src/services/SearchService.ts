import { Response, NextFunction } from 'express';
import Course from '../models/Course';

export const searchAllService = async (
  _req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    const search =await Course.aggregate([
      {
        '$lookup': {
          //searching collection name
          'from': 'instructors',
          // setting variable [searchId] where your string converted to ObjectId
          'let': { "searchId": { $toObjectId: "$instructor_id" } },
          //search query with our [searchId] value
          "pipeline": [
            //searching [searchId] value equals your field [_id]
            { "$match": { "$expr": { "$eq": ["$_id", "$$searchId"] } } },
            // { "$match": { 
            //   "$and": [
            //     { "$or": [{ "instructorName": { '$regex': req.body.keyword, '$options': 'i' }}]},
            //     { "$or": [{ "deleted_at": null }] }
            // ]} },
            //projecting only fields you really need, otherwise you will store all - huge data loads
            // { "$project": { "_id": 1, "instructorName": "instructorName" } }
          ],
          'as': 'instructor_id'
        }
      },
      // {
      //   "$unwind": "$instructor_id"  // $unwind used for getting data in object or for one record only
      // },
      {
        '$lookup': {
          'from': 'categories',
          'let': { "searchId": "$detail.category_id" },
          "pipeline": [
            { "$match": { "$expr": { "$eq": ["$_id", "$$searchId"] } } },
            // { "$match": {
            //   "$and": [
            //     { "$or": [{ category: { '$regex': req.body.keyword, '$options': 'i' } }, { subcategories: { '$regex': req.body.keyword, '$options': 'i' } }] },
            //     { "$or": [{ deleted_at: null }] }
            //   ]
            // }}
          ],
          'as': 'detail.category_id'
        }
      },
    ])
    res.json({ data: search, status: 1 })
  } catch (err) {
    console.log(err)
    next(err)
  }
}