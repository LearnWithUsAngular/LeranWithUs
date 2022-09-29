import { Request, Response, NextFunction } from 'express'
import { createInstructorService, deleteInstructorService, findInstructorService, getInstructorService, searchByInstructorService, updateInstructorService } from '../services/InstructorService';

/**
 * Get Instructor
 * @param req 
 * @param res 
 * @param next 
 */
export const getInstructor = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  getInstructorService(req, res, next);
};

/**
 * Create Instructor
 * @param req 
 * @param res 
 * @param next 
 */
export const createInstructor = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  createInstructorService(req, res, next);
};

/**
 * Find Instructor
 * @param req 
 * @param res 
 * @param next 
 */
export const findInstructor = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  findInstructorService(req, res, next);
}

/**
 * Update Instructor
 * @param req 
 * @param res 
 * @param next 
 */
export const updateInstructor = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  updateInstructorService(req, res, next);
};

/**
 * Delete Instructor
 * @param req 
 * @param res 
 * @param next 
 */
export const deleteInstructor = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  deleteInstructorService(req, res, next);
};

/**
 * Search By Instructor
 * @param req 
 * @param res 
 * @param next 
 */
 export const searchByInstructor = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  searchByInstructorService(req, res, next);
}