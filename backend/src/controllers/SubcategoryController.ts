import { Request, Response, NextFunction } from 'express'
import { getSubcategoryService, createSubcategoryService, findSubcategoryService, updateSubcategoryService, deleteSubcategoryService } from '../services/SubcategoryService'

/**
 * Get Subcategory
 * @param req 
 * @param res 
 * @param next 
 */
export const getSubcategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  getSubcategoryService(req, res, next);
};

/**
 * Create Subcategory
 * @param req 
 * @param res 
 * @param next 
 */
export const createSubcategory = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  createSubcategoryService(req, res, next);
};

/**
 * Find Subcategory
 * @param req 
 * @param res 
 * @param next 
 */
export const findSubategory = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  findSubcategoryService(req, res, next);
};

/**
 * Update Subcategory
 * @param req 
 * @param res 
 * @param next 
 */
export const updateSubcategory = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  updateSubcategoryService(req, res, next);
};

/**
 * Delete Subcategory
 * @param req 
 * @param res 
 * @param next 
 */
export const deleteSubcategory = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  deleteSubcategoryService(req, res, next);
};