import { Request, Response, NextFunction } from 'express'
import { getUserService, createUserService, findUserService, updateUserService, deleteUserService } from '../services/UserService';

export const getUser = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    getUserService(req, res, next);
};

export const createUser = async (
    req: any,
    res: Response,
    next: NextFunction
) => {
    createUserService(req, res, next);
};

export const findUser = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    findUserService(req, res, next);
}

export const updateUser = async (
    req: any,
    res: Response,
    next: NextFunction
) => {
    updateUserService(req, res, next);
};

export const deleteUser = async (
    req: any,
    res: Response,
    next: NextFunction
) => {
    deleteUserService(req, res, next);
};