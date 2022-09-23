import { Request, Response, NextFunction } from 'express'
import { createCourseVideoService, deleteCourseVideoService, findCourseVideoService, getCourseVideoService, updateCourseVideoService } from '../services/CourseVideoService';

/**
 * Get Course Video
 * @param req 
 * @param res 
 * @param next 
 */
export const getCourseVideo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  getCourseVideoService(req, res, next);
};

/**
 * Create Course Video
 * @param req 
 * @param res 
 * @param next 
 */
export const createCourseVideo = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  createCourseVideoService(req, res, next);
};

/**
 * Find Course Video
 * @param req 
 * @param res 
 * @param next 
 */
export const findCourseVideo = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  findCourseVideoService(req, res, next);
};

/**
 * Update Course Video
 * @param req 
 * @param res 
 * @param next 
 */
export const updateCourseVideo = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  updateCourseVideoService(req, res, next);
};

/**
 * Delete Course Video
 * @param req 
 * @param res 
 * @param next 
 */
export const deleteCourseVideo = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  deleteCourseVideoService(req, res, next);
};