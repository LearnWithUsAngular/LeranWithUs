import { Response, NextFunction } from 'express';
// import Category from '../models/Category';
import Course from '../models/Course';
// import Instructor from '../models/Instructor';

export const searchAllService = async (
  req: any,
  res: Response,
  _next: NextFunction
) => {
  try {
    const coresult = await Course.aggregate([
      {
        '$lookup': {
          //searching collection name
          'from': 'instructors',
          //setting variable [searchId] where your string converted to ObjectId
          'let': { "searchId": { $toObjectId: "$instructor_id" } },
          //search query with our [searchId] value
          "pipeline": [
            //searching [searchId] value equals your field [_id]
            { "$match": { "$expr": [{ "_id": "$$searchId" }] } },
            { "$match": { "$and": [
              { "$or": [{ "instructorName": { '$regex': req.body.keyword, '$options': 'i' } }] },
              { "$or": [{ "deleted_at": null }] }
            ]} },

            //projecting only fields you reaally need, otherwise you will store all - huge data loads
            // { "$project": { "_id": 1, "instructorName": "instructorName" } }
          ],
          'as': 'instructorInfo'
        }
      },
      // {
      //   "$unwind": "$instructorInfo"  // $unwind used for getting data in object or for one record only
      // },
      {
        '$lookup': {
          'from': 'category',
          'let': { "catId": { $toObjectId: "$category_id" } },
          "pipeline": [
            { "$match": { "$expr": [{ "_id": "$$catId" }] } },
          ],
          'as': 'categoryInfo'
        }
      },
    ]);
    res.json({ data: coresult, status: 1 })
  } catch (err) {
    console.log(err)
  }
}