import { Request, Response, NextFunction } from 'express'
import { createCourseService, getCourseService } from '../services/CourseService';


export const getCourse = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  getCourseService(req, res, next);
};

export const createCourse = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  createCourseService(req, res, next);
};