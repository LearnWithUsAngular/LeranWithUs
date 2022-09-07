import { Request, Response, NextFunction } from 'express'
import { getCategoryService, createCategoryService, findCategoryService, updateCategoryService, deleteCategoryService } from '../services/CategoryService'

/**
 * Get Category
 * @param req 
 * @param res 
 * @param next 
 */
export const getCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  getCategoryService(req, res, next);
};

/**
 * Create Category
 * @param req 
 * @param res 
 * @param next 
 */
export const createCategory = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  createCategoryService(req, res, next);
};

/**
 * Find Category
 * @param req 
 * @param res 
 * @param next 
 */
export const findCategory = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  findCategoryService(req, res, next);
};

/**
 * Update Category
 * @param req 
 * @param res 
 * @param next 
 */
export const updateCategory = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  updateCategoryService(req, res, next);
};

/**
 * Delete Category
 * @param req 
 * @param res 
 * @param next 
 */
export const deleteCategory = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  deleteCategoryService(req, res, next);
};

