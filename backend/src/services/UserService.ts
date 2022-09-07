import { Request, Response, NextFunction } from 'express'
import User from '../models/User'
import bcrypt from 'bcrypt'
import { deleteFile } from '../utils/deleteFile';
import { validationResult } from 'express-validator';

export const getUserService = async (
    _req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        // const page: any = req.query.page || 0;
        // const userPerPage: any = req.query.upp || 5;

        let condition: any = { deleted_at: null };
        const result = await User.find(condition)
        // .skip(page * userPerPage)
        // .limit(userPerPage);
        res.json({ data: result, status: 1 });
    } catch (err) {
        next(err);
    }
};

export const createUserService = async (
    req: any,
    res: Response,
    next: NextFunction
) => {
    try {
        const errors = validationResult(req.body);
        if (!errors.isEmpty()) {
            const error: any = new Error("Validation failed!");
            error.data = errors.array();
            error.statusCode = 422;
            throw error;
        }
        let userProfile: string = req.body.userProfile;
        if (req.files) {
            userProfile = req.files.userProfile[0].path.replace("\\", "/");
        }
        const userInsert = {
            name: req.body.name,
            email: req.body.email,
            password: await bcrypt.hash(req.body.password, 12),
            phone: req.body.phone,
            userProfile: userProfile,
        }
        const user = new User(userInsert);
        const result = await user.save();
        res.status(201).json({ message: "Created Successfully", data: result, status: 1 })
    } catch (err: any) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err)
    }
};

export const findUserService = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            const error: any = Error("Not Found!");
            error.statusCode = 404;
            throw error;
        }
        res.json({ data: user, status: 1 });
    } catch (err) {
        next(err)
    }
}

export const updateUserService = async (
    req: any,
    res: Response,
    next: NextFunction
) => {
    try {
        const errors = validationResult(req.body);
        if (!errors.isEmpty()) {
            const error: any = new Error("Validation failed!");
            error.data = errors.array();
            error.statusCode = 422;
            throw error;
        }
        const user: any = await User.findById(req.params.id);
        if (!user) {
            const error: any = new Error("Not Found!");
            error.statusCode = 404;
            throw error;
        }
        let userProfile: string = req.body.userProfile;
        if (req.files) {
            userProfile = req.files.userProfile[0].path.replace("\\", "/");
            if (user.userProfile && user.userProfile != userProfile) {
                deleteFile(user.userProfile);
            }
            if (userProfile) {
                user.userProfile = userProfile;
            }
        }
        user.name = req.body.name;
        user.email = req.body.email;
        user.phone = req.body.phone;
        const result = await user.save();
        res.json({ message: "Updated User Successfully!", data: result, status: 1 });
    } catch (err) {
        next(err)
    }
};

export const deleteUserService = async (
    req: any,
    res: Response,
    next: NextFunction
) => {
    try {
        const user: any = await User.findById(req.params.id);
        if (!user) {
            const error: any = new Error("Not Found!");
            error.statusCode = 404;
            throw error;
        }
        user.deleted_at = new Date();
        const result = await user.save();
        res.json({ message: "Delete User Successfully!", data: result, status: 1 });
    } catch (err) {
        next(err)
    }
};