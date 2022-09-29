import { Request, Response, NextFunction } from 'express'
import { getUserService, createUserService, findUserService, updateUserService, deleteUserService, searchByUserService } from '../services/UserService';

/**
 * Get User
 * @param req 
 * @param res 
 * @param next 
 */
export const getUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  getUserService(req, res, next);
};

/**
 * Create User
 * @param req 
 * @param res 
 * @param next 
 */
export const createUser = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  createUserService(req, res, next);
};

/**
 * Find User
 * @param req 
 * @param res 
 * @param next 
 */
export const findUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  findUserService(req, res, next);
}

/**
 * Update User
 * @param req 
 * @param res 
 * @param next 
 */
export const updateUser = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  updateUserService(req, res, next);
};

/**
 * Delete User
 * @param req 
 * @param res 
 * @param next 
 */
export const deleteUser = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  deleteUserService(req, res, next);
};

/**
 * Search By User
 * @param req 
 * @param res 
 * @param next 
 */
 export const searchByUser = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  searchByUserService(req, res, next);
}