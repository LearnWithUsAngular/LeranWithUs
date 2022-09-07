import { Request, Response, NextFunction } from 'express'
import { getCategoryService, createCategoryService, findCategoryService, updateCategoryService, deleteCategoryService } from '../services/CategoryService'

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
  createCategoryService(req, res, next);
};

export const findCategory = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  findCategoryService(req, res, next);
};

export const updateCategory = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  updateCategoryService(req, res, next);
};

export const deleteCategory = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  deleteCategoryService(req, res, next);
};

