import { Request, Response, NextFunction } from 'express'
// import { validationResult } from 'express-validator';
import Subcategory from '../models/Subcategory';
// import Category from '../models/Category';

export const getSubcategoryService = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const page: any = req.query.page || 0;
        const subcategoryPerPage: any = req.query.scpp || 5;

        let condition: any = { deleted_at: null };
        const result = await Subcategory
                                    .find(condition)
                                    .populate({ path: 'category_id', select: 'category',})
                                    .skip(page * subcategoryPerPage)
                                    .limit(subcategoryPerPage);
        res.json({ data: result, status: 1 });
    } catch (err) {
        next(err);
    }
};

export const createSubcategoryService = async (
    req: any,
    res: Response,
    next: NextFunction
) => {
    try {
        // const errors = validationResult(req)
        // if (!errors.isEmpty()) {
        //     const error: any = new Error("Validation failed!");
        //     error.data = errors.array();
        //     error.statusCode = 422;
        //     throw error;
        // }
        const subcategoryInsert = {
            subcategory: req.body.subcategory,
            category_id: req.body.category_id
        }
        const subcategory = new Subcategory(subcategoryInsert);
        const result = await subcategory.save();
        res.status(201).json({ message: "Created Successfully", data: result, status: 1 })
    } catch (err: any) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err)
    }
};