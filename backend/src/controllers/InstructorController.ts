import { Request, Response, NextFunction } from 'express'
import { createInstructorService, deleteInstructorService, findInstructorService, getInstructorService, updateInstructorService } from '../services/InstructorService';

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

export const findInstructor = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    findInstructorService(req, res, next);
}

export const updateInstructor = async (
    req: any,
    res: Response,
    next: NextFunction
) => {
    updateInstructorService(req, res, next);
};

export const deleteInstructor = async (
    req: any,
    res: Response,
    next: NextFunction
) => {
    deleteInstructorService(req, res, next);
};