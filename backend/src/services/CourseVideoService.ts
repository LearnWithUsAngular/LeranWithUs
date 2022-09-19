import { Request, Response, NextFunction } from 'express';
import CourseVideo from '../models/CourseVideo';
import { logger } from '../logger/logger';
import { deleteFile } from '../utils/deleteFile';

/**
 * Get CourseVideo Service
 * @param _req 
 * @param res 
 * @param _next 
 */
export const getCourseVideoService = async (
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  try {
    let condition: any = { deleted_at: null };
    const resume = await CourseVideo.find(condition);
    res.json({ data: resume, status: 1 });
  } catch (err) {
    logger.error("Get CourseVideo Service Error");
    logger.error(err);
    res.send("An error occured");
  }
};

/**
 * Create CourseVideo Service
 * @param req 
 * @param res 
 * @param next 
 */
export const createCourseVideoService = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    let courseURL: string = req.body.courseURL;
    if (req?.files && req?.files?.courseURL?.length > 0) {
      courseURL = req.files.courseURL[0].path.replace("\\", "/");
    }
    let data: any = {
      courseName: req.body.courseName,
      description: req.body.description,
      courseURL: courseURL
    };
    logger.info(data);
    const course = new CourseVideo(data);
    const result = await course.save();
    res
      .status(201)
      .json({ message: "Created Successfully!", data: result, status: 1 });
  } catch (err) {
    logger.error("Create Course Video Service Error");
    logger.error(err);
    next(err);
  }
};

/**
 * Find CourseVideo Service
 * @param req 
 * @param res 
 * @param next 
 */
export const findCourseVideoService = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const course = await CourseVideo.findById(req.params.id)
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
 * Update CourseVideo Service
 * @param req 
 * @param res 
 * @param next 
 */
export const updateCourseVideoService = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    const courseVideo: any = await CourseVideo.findById(req.params.id);
    if (!courseVideo) {
      const error: any = new Error("Not Found!");
      error.statusCode = 404;
      throw error;
    }

    courseVideo.courseName = req.body.courseName;
    courseVideo.description = req.body.description;

    if (req.files) {
      const courseVideoURL = req.files.courseURL[0].path.replace("\\", "/");
      if (courseVideo.courseURL && courseVideo.courseURL != courseVideoURL) {
        deleteFile(courseVideo.courseURL);
      }
      if (courseVideoURL) {
        courseVideo.courseURL = courseVideoURL;
      }
    }

    const response = await courseVideo.save();
    res.json({ message: "Updated Successfully!", data: response, status: 1 });
  } catch (err: any) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err)
  }
};

/**
 * Delete CourseVideo Service
 * @param req 
 * @param res 
 * @param next 
 */
export const deleteCourseVideoService = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    const courseVideo: any = await CourseVideo.findById(req.params.id);
    if (!courseVideo) {
      const error: any = new Error("Not Found!");
      error.statusCode = 404;
      throw error;
    }
    courseVideo.deleted_at = new Date();
    if (courseVideo?.courseUR) {
      deleteFile(courseVideo.courseURL);
    }
    await courseVideo.save();
    res.json({ message: "Deleted Successfully!", status: 1 });
  } catch (err: any) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    logger.error("delete course video service error");
    logger.error(err);
    next(err)
  }
};