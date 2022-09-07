import { Request, Response, NextFunction } from 'express'
import Course from '../models/Course'

export const getCourseService = async (
    _req: Request,
    res: Response,
    _next: NextFunction
) => {
    try {
        // const page: any = req.query.page || 0;
        // const coursePerPage: any = req.query.cpp || 5;

        let condition: any = { deleted_at: null };
        const resume = await Course.find(condition)
                                // .skip(page * coursePerPage)\
                                // .limit(coursePerPage);
        res.json({ data: resume, status: 1 });
    } catch (err) {
        res.send("An error occured");
    }
};

export const createCourseService = async (
    req: any,
    _res: Response,
    next: NextFunction
) => {
    try {
        const det = JSON.parse(JSON.stringify(req.body.detail));
        const fee = JSON.parse(JSON.stringify(req.body.coursePrice));
        // console.log(JSON.parse(obj).title)
        // console.log(req.files.courseCover[0].path.replace("\\","/"))
        const courseForm = {
            // detail: req.body.detail,
            // cousePrice: req.body.coursePrice,
            // courseUpload: req.body.courseUpload,
            // instructor_id: req.body.instructor_id,
            detail: {
               title: JSON.parse(det).title,
               subtitle: JSON.parse(det).subtitle,
               description: JSON.parse(det).description,
               language: JSON.parse(det).language,
               level: JSON.parse(det).level,
               category_id: JSON.parse(det).category_id,
               subcategory_id: JSON.parse(det).subcategory_id,
               courseCover: req.files.courseCover[0].path.replace("\\","/")
            },
            coursePrice: {
                currency: JSON.parse(fee).currency,
                price: JSON.parse(fee).price,
                promocode: JSON.parse(fee).promocode
            }
        }
        console.log(courseForm)
        // const course = new Course(JSON.parse(JSON.stringify(courseForm)));
        // const result = await course.save();
        // console.log(result)
        // res
        //     .status(201)
        //     .json({ message: "Created Successfully!", data: result, status: 1 });
    } catch (err) {
        next(err);
    }
};