import { Request, Response, NextFunction } from 'express'
import Category from '../models/Category';

export const getCategoryService = async (
    req: Request,
    res: Response,
    _next: NextFunction
) => {
    try {
        const page: any = req.query.page || 0;
        const resumePerPage: any = req.query.rpp || 5;

        let condition: any = { deleted_at: null };
        const resume = await Category.find(condition).skip(page * resumePerPage).limit(resumePerPage);
        res.json({ data: resume, status: 1 });
    } catch (err) {
        res.send("An error occured");
    }
};

export const createCategoryService = async (
    req: Request,
    res: Response,
    _next: NextFunction
) => {
    try {
        const page: any = req.query.page || 0;
        const resumePerPage: any = req.query.rpp || 5;

        let condition: any = { deleted_at: null };
        const resume = await Category.find(condition).skip(page * resumePerPage).limit(resumePerPage);
        res.json({ data: resume, status: 1 });
    } catch (err) {
        res.send("An error occured");
    }
};