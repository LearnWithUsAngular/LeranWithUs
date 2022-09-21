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
    const resume = await Course.find(condition).populate({ path: 'instructor_id' });
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
    const detail = JSON.parse(JSON.stringify(req.body.detail));
    const price = JSON.parse(JSON.stringify(req.body.coursePrice));
    const cupload = JSON.parse(JSON.stringify(req.body.courseUpload));

    let courses: any = [];
    JSON.parse(cupload).map((res: any) => {
      let result = {
        courseName: res.courseName,
        description: res.description,
        courseVideo: req.files.courseVideo[0].path.replace("\\", "/")
      }
      courses.push(result)
    })

    const courseForm = {
      detail: {
        title: JSON.parse(detail).title,
        subtitle: JSON.parse(detail).subtitle,
        description: JSON.parse(detail).description,
        language: JSON.parse(detail).language,
        level: JSON.parse(detail).level,
        category_id: JSON.parse(detail).category_id,
        courseCover: req.files.courseCover[0].path.replace("\\", "/")
      },
      coursePrice: {
        currency: JSON.parse(price).currency,
        price: JSON.parse(price).price,
        promocode: JSON.parse(price).promocode
      },
      courseUpload: courses,
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
    const detail = JSON.parse(JSON.stringify(req.body.detail));
    const price = JSON.parse(JSON.stringify(req.body.coursePrice));
    const cupload = JSON.parse(JSON.stringify(req.body.courseUpload));

    let courseCover: string = req.files.courseCover;
    if (req.files) {
      courseCover = req.files.courseCover[0].path.replace("\\", "/");
      if (course.detail.courseCover && course.detail.courseCover != courseCover) {
        deleteFile(course.detail.courseCover);
      }
      if (courseCover) {
        course.detail.courseCover = courseCover;
      }
    }

    let courses: any = [];
    JSON.parse(cupload).map((res: any) => {
      let result = {
        courseName: res.courseName,
        description: res.description,
        courseVideo: req.files.courseVideo[0].path.replace("\\", "/")
      }
      courses.push(result)
    })

    course.detail.title = JSON.parse(detail).title;
    course.detail.subtitle = JSON.parse(detail).subtitle;
    course.detail.description = JSON.parse(detail).description;
    course.detail.language = JSON.parse(detail).language;
    course.detail.level = JSON.parse(detail).level;
    course.detail.category_id = JSON.parse(detail).category_id;

    course.coursePrice.currency = JSON.parse(price).currency;
    course.coursePrice.price = JSON.parse(price).price;
    course.coursePrice.promocode = JSON.parse(price).promocode;

    course.courseUpload = courses;

    course.instructor_id = req.body.instructor_id;

    const result = await course.save();
    res.json({ message: "Updated Successfully!", data: result, status: 1 });
  } catch (err: any) {
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
    logger.error("delete category service error");
    logger.error(err);
    next(err)
  }
};