import { Response, NextFunction } from 'express';
import Instructor from '../models/Instructor';
import Category from '../models/Category';
import Course from '../models/Course';

export const searchAllService = async (
    _req: any,
    _res: Response,
    _next: NextFunction
  ) => {
    try {
        Instructor;
        Category;
        Course;
    } catch (err) {
      console.log(err)
    }
  }