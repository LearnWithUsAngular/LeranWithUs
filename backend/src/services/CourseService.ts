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
        // const obj = JSON.parse(JSON.stringify(req.body)); 
        // console.log(obj);
        // const obj = JSON.parse(JSON.stringify(req.body.detail));
        console.log(req.body.detail)
        // console.log(req.files.courseCover[0].path.replace("\\","/"))
        // const courseForm = {
        //     // detail: req.body.detail,
        //     // cousePrice: req.body.coursePrice,
        //     // courseUpload: req.body.courseUpload,
        //     instructor_id: req.body.instructor_id,
        //     detail: {
        //        title: req.body.title,
        //        subtitle: req.body.subtitle,
        //        description: req.body.description,
        //        language: req.body.language,
        //        level: req.body.level,
        //        category_id: req.body.category_id,
        //        subcategory_id: req.body.subcategory_id,
        //        courseCover: req.files.courseCover[0].path.replace("\\","/")
        //     },
        //     coursePrice: {
        //         currency: req.body.currency,
        //         price: req.body.price,
        //         promocode: req.body.promocode
        //     }
        // }
        // console.log(JSON.parse(JSON.stringify(courseForm)))
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