import { Request, Response, NextFunction } from 'express'
import { getCategoryService } from '../services/CategoryService'

export const getCategory = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    getCategoryService(req, res, next);
};

export const createCategory = async (
    req: any,
    res: Response,
    next: NextFunction
) => {
    getCategoryService(req, res, next);
};