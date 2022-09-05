import { Request, Response, NextFunction } from 'express'
import Instructor from '../models/Instructor';

export const getInstructorService = async (
    _req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        // const page: any = req.query.page || 0;
        // const instructorPerPage: any = req.query.ipp || 5;

        let condition: any = { deleted_at: null };
        const result = await Instructor.find(condition).populate({ path: 'user_id'})
                                    // .skip(page * instructorPerPage)
                                    // .limit(instructorPerPage);
        res.json({ data: result, status: 1 });
    } catch (err) {
        next(err);
    }
};

export const createInstructorService = async (
    req: any,
    res: Response,
    next: NextFunction
) => {
    try {
        const instructorInsert = {
            intructorName: req.body.intructorName,
            headline: req.body.headline,
            biography: req.body.biography,
            profile: req.body.profile,
            user_id: req.body.user_id
        }
        const instructor = new Instructor(instructorInsert);
        const result = await instructor.save();
        res.status(201).json({ message: "Created Successfully", data: result, status: 1 })
    } catch (err: any) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err)
    }
};