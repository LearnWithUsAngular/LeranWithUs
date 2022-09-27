import { Response, NextFunction } from 'express';
import Course from '../models/Course';

export const searchAllService = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.body.keyword) {
      let condition: any = { "deleted_at": null };
      const level = await Course.find(condition);
      const count = await Course.count(condition);
      res.json({ data: level, total: count, status: 1 })
    }

    if (req.body.keyword) {
      const query = [
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
            ],
            'as': 'instructorInfo'
          }
        },
        {
          "$unwind": "$instructorInfo"  // $unwind used for getting data in object or for one record only
        },
        {
          '$lookup': {
            'from': 'categories',
            'let': { "searchId": "$detail.category_id" },
            "pipeline": [
              { "$match": { "$expr": { "$eq": ["$_id", "$$searchId"] } } },
            ],
            'as': 'categoryInfo'
          }
        },
        {
          "$unwind": "$categoryInfo"
        },
        {
          "$match": {
            "$and": [
              {
                "$or": [
                  { "detail.title": { '$regex': req.body.keyword, '$options': 'i' } },
                  { "detail.level": { '$regex': req.body.keyword, '$options': 'i' } },
                  { "instructorInfo.instructorName": { '$regex': req.body.keyword, '$options': 'i' } },
                  { "categoryInfo.category": { '$regex': req.body.keyword, '$options': 'i' } },
                ]
              },
              { "$or": [{ "deleted_at": null }] }
            ]
          }
        },
      ]
      const search = await Course.aggregate(query);
      const count = search.length;
      res.json({ data: search, total: count, status: 1 })
    }
  } catch (err) {
    console.log(err)
    next(err)
  }
}

export const searchByLevelService = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    if (req.body.level === "Beginner") {
      let condition: any = { "detail.level": "Beginner", "deleted_at": null };
      const level = await Course.find(condition);
      const count = await Course.count(condition);
      res.json({ data: level, total: count, status: 1 })
    }

    if (req.body.level === "Intermediate") {
      let condition: any = { "detail.level": "Intermediate", "deleted_at": null };
      const level = await Course.find(condition);
      const count = await Course.count(condition);
      res.json({ data: level, total: count, status: 1 })
    }

    if (req.body.level === "Expert") {
      let condition: any = { "detail.level": "Expert", "deleted_at": null };
      const level = await Course.find(condition);
      const count = await Course.count(condition);
      res.json({ data: level, total: count, status: 1 })
    }

    if (!req.body.level || req.body.level === "All") {
      let condition: any = { "deleted_at": null };
      const level = await Course.find(condition);
      const count = await Course.count(condition);
      res.json({ data: level, total: count, status: 1 })
    }
  } catch (err) {
    console.log(err)
    next(err)
  }
}