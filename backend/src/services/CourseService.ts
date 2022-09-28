import { Request, Response, NextFunction } from 'express';
import Course from '../models/Course';
import { logger } from '../logger/logger';
import { deleteFile } from '../utils/deleteFile';

/**
 * Get Course Service
 * @param _req 
 * @param res 
 * @param _next 
 */
export const getCourseService = async (
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  try {
    let condition: any = { deleted_at: null };
    const resume = await Course.find(condition);
    res.json({ data: resume, status: 1 });
  } catch (err) {
    logger.error("Get Course Service Error");
    logger.error(err);
    res.send("An error occured");
  }
};

/**
 * Create Course Service
 * @param req 
 * @param res 
 * @param next 
 */
export const createCourseService = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    const courseUpload = req.body.courseUpload;
    let courseCover = null;
    if (req.files?.courseCover?.length > 0) {
      courseCover = req.files.courseCover[0].path.replaceAll("\\", "/")
    }

    const courseForm = {
      detail: {
        title: req.body.title,
        subtitle: req.body.subtitle,
        description: req.body.description,
        language: req.body.language,
        level: req.body.level,
        category_id: req.body.category_id,
        courseCover: courseCover
      },
      coursePrice: {
        currency: req.body.currency,
        price: req.body.price,
        promocode: req.body.promocode
      },
      courseUpload: courseUpload,
      instructor_id: req.body.instructor_id,
    }
    console.log(courseForm)
    const course = new Course(courseForm);
    const result = await course.save();
    res
      .status(201)
      .json({ message: "Created Successfully!", data: result, status: 1 });
  } catch (err) {
    logger.error("Create Course Service Error");
    logger.error(err);
    next(err);
  }
};

/**
 * Find Course Service
 * @param req 
 * @param res 
 * @param next 
 */
export const findCourseService = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const course = await Course.findById(req.params.id)
    if (!course) {
      const error: any = Error("Not Found!");
      error.statusCode = 404;
      throw error;
    }
    res.json({ data: course, status: 1 });
  } catch (err: any) {
    logger.error('Get Course By Id');
    logger.error(err);
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err)
  }
}

/**
 * Update Course Service
 * @param req 
 * @param res 
 * @param next 
 */
export const updateCourseService = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    const course: any = await Course.findById(req.params.id);
    if (!course) {
      const error: any = new Error("Not Found!");
      error.statusCode = 404;
      throw error;
    }
    const courseUpload = req.body.courseUpload;

    let courseCover: string = req.files.courseCover;
    if (req?.files?.courseCover && req.files?.courseCover?.length > 0) {
      courseCover = req.files.courseCover[0].path.replaceAll("\\", "/");
      if (course.detail.courseCover && course.detail.courseCover != courseCover) {
        deleteFile(course.detail.courseCover);
      }
      if (courseCover) {
        course.detail.courseCover = courseCover;
      }
    }

    course.detail.title = req.body.title;
    course.detail.subtitle = req.body.subtitle;
    course.detail.description = req.body.description;
    course.detail.language = req.body.language;
    course.detail.level = req.body.level;
    course.detail.category_id = req.body.category_id;

    course.coursePrice.currency = req.body.currency;
    course.coursePrice.price = req.body.price;
    course.coursePrice.promocode = req.body.promocode;
    course.courseUpload = courseUpload;
    course.instructor_id = req.body.instructor_id;

    const result = await course.save();
    res.json({ message: "Updated Successfully!", data: result, status: 1 });
  } catch (err: any) {
    logger.error('Course Update API Error');
    logger.error(err);
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err)
  }
};

/**
 * Delete Course Service
 * @param req 
 * @param res 
 * @param next 
 */
export const deleteCourseService = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    const course: any = await Course.findById(req.params.id);
    if (!course) {
      const error: any = new Error("Not Found!");
      error.statusCode = 404;
      throw error;
    }
    course.deleted_at = new Date();
    await course.save();
    res.json({ message: "Deleted Successfully!", status: 1 });
  } catch (err: any) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    logger.error("Delete Course service API error");
    logger.error(err);
    next(err)
  }
};