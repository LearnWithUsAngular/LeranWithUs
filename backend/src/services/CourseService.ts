import { Request, Response, NextFunction } from 'express';
import Course from '../models/Course';
import { logger } from '../logger/logger';

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
    const resume = await Course.find(condition)
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
  _res: Response,
  next: NextFunction
) => {
  try {
    // const detail = JSON.parse(JSON.stringify(req.body.detail));
    // const price = JSON.parse(JSON.stringify(req.body.coursePrice));
    const cupload = JSON.parse(JSON.stringify(req.body.courseUpload));
    // console.log(JSON.parse(cupload))

    let courses: any = [];
    JSON.parse(cupload).map((res:any) => {
        let result = {
            courseName: res.courseName,
            description: res.description,
            courseVideo: req.files.courseVideo[0].path.replace("\\","/")
        }
        courses.push(result)
    })
    console.log(courses)

    // req.files.courseVideo.map((res: any) => {
    //   let result = {
    //     courseVideo: res.path.replace("\\","/")
    //   }
    //   console.log(result)
    // })
    
    // const courseForm = {
    //   detail: {
    //     title: JSON.parse(detail).title,
    //     subtitle: JSON.parse(detail).subtitle,
    //     description: JSON.parse(detail).description,
    //     language: JSON.parse(detail).language,
    //     level: JSON.parse(detail).level,
    //     category_id: JSON.parse(detail).category_id,
    //     courseCover: req.files.courseCover[0].path.replace("\\", "/")
    //   },
    //   coursePrice: {
    //     currency: JSON.parse(price).currency,
    //     price: JSON.parse(price).price,
    //     promocode: JSON.parse(price).promocode
    //   },
    //   // courseUpload: JSON.parse(cupload).map((res:any) => {
    //   //     let result = {
    //   //         courseName: res.courseName,
    //   //         description: res.description,
    //   //     }
    //   //     console.log(result)
    //   // }),
    //   instructor_id: req.body.instructor_id,
    // }
    // console.log(courseForm)
    // const course = new Course(courseForm);
    // const result = await course.save();
    // console.log(result)
    // res
    //   .status(201)
    //   .json({ message: "Created Successfully!", data: result, status: 1 });
  } catch (err) {
    logger.error("Create Course Service Error");
    logger.error(err);
    next(err);
  }
};