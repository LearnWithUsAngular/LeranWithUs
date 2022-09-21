import { Response, NextFunction } from 'express';
import Category from '../models/Category';
import Instructor from '../models/Instructor';
import Course from '../models/Course';

export const searchAllService = async (
    _req: any,
    res: Response,
    _next: NextFunction
  ) => {
    try {
      let condition: any = { deleted_at: null };
      // req.body?.keyword ? condition.instructorName = { '$regex': req.body.keyword, '$options': 'i' } : '';
      // req.body?.keyword ? condition.category = { '$regex': req.body.category, '$options': 'i' } : '';
      // req.body?.subcategories ? condition.subcategories = { '$regex': req.body.subcategories, '$options': 'i' } : '';


      const iresult = await Instructor.find(condition);
      const cresult = await Category.find(condition);
      const coresult = await Course.find(condition);

      res.json({ instructordata: iresult, categorydata: cresult, coursedata: coresult, status: 1 });
    } catch (err) {
      console.log(err)
    }
  }