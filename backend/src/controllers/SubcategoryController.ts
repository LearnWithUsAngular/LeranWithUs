import { Request, Response, NextFunction } from 'express'
import { createSubcategoryService, getSubcategoryService } from '../services/SubcategoryService';


export const getSubcategory = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    getSubcategoryService(req, res, next);
};

export const createSubcategory = async (
    req: any,
    res: Response,
    next: NextFunction
) => {
    createSubcategoryService(req, res, next);
};