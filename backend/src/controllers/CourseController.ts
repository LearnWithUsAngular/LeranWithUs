import { Request, Response, NextFunction } from 'express'
import { createCourseService, deleteCourseService, findCourseService, getCourseService, updateCourseService } from '../services/CourseService';

/**
 * Get Course
 * @param req 
 * @param res 
 * @param next 
 */
export const getCourse = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  getCourseService(req, res, next);
};

/**
 * Create Course
 * @param req 
 * @param res 
 * @param next 
 */
export const createCourse = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  createCourseService(req, res, next);
};

/**
 * Find Course
 * @param req 
 * @param res 
 * @param next 
 */
 export const findCourse = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  findCourseService(req, res, next);
};

/**
 * Update Course
 * @param req 
 * @param res 
 * @param next 
 */
export const updateCourse = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  updateCourseService(req, res, next);
};

/**
 * Delete Course
 * @param req 
 * @param res 
 * @param next 
 */
export const deleteCourse = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  deleteCourseService(req, res, next);
};