import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import bcrypt from 'bcrypt'
import User from '../models/User'
import { deleteFile } from '../utils/deleteFile';
import { logger } from '../logger/logger';

/**
 * Get User Service
 * @param _req 
 * @param res 
 * @param next 
 */
export const getUserService = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let condition: any = { deleted_at: null };
    const result = await User.find(condition)
    res.json({ data: result, status: 1 });
  } catch (err) {
    logger.error("get UserService Error");
    logger.error(err);
    next(err);
  }
};

/**
 * Create User Service
 * @param req 
 * @param res 
 * @param next 
 */
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
      userProfile = req.files.userProfile[0].path.replaceAll("\\", "/");
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
    logger.error("create UserService Error");
    logger.error(err);
    next(err)
  }
};

/**
 * Find User Service
 * @param req 
 * @param res 
 * @param next 
 */
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
    logger.error("find UserService Error");
    logger.error(err);
    next(err)
  }
}

/**
 * Update User Service
 * @param req 
 * @param res 
 * @param next 
 */
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
    if (req.files && req.files.userProfile?.length > 0) {
      userProfile = req.files.userProfile[0].path.replaceAll("\\", "/");
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
    logger.error("update UserService Error");
    logger.error(err);
    next(err)
  }
};

/**
 * Delete  User Service
 * @param req 
 * @param res 
 * @param next 
 */
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
    logger.error("delete UserService Error");
    logger.error(err);
    next(err)
  }
};