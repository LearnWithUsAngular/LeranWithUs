import { Request, Response, NextFunction } from 'express'
import { createInstructorService, getInstructorService } from '../services/InstructorService';

export const getInstructor = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    getInstructorService(req, res, next);
};

export const createInstructor = async (
    req: any,
    res: Response,
    next: NextFunction
) => {
    createInstructorService(req, res, next);
};