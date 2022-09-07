import { Request, Response, NextFunction } from 'express'
import { validationResult } from 'express-validator';
import Category from '../models/Category';
import { CategoryCreate } from '../interfaces/Category';

/**
 * Get Category Service
 * @param _req 
 * @param res 
 * @param next 
 */
export const getCategoryService = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let condition: any = { deleted_at: null };
    const result = await Category.find(condition)
    res.json({ data: result, status: 1 });
  } catch (err) {
    next(err);
  }
};


/**
 * Create Category Service
 * @param req 
 * @param res 
 * @param next 
 */
export const createCategoryService = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      const error: any = new Error("Validation failed!");
      error.data = errors.array();
      error.statusCode = 422;
      throw error;
    }
    const categoryInsert: CategoryCreate = {
      category: req.body.category,
      subcategories: req.body.subcategories
    }
    const category = new Category(categoryInsert);
    const result = await category.save();
    res.status(201).json({ message: "Created Successfully", data: result, status: 1 })
  } catch (err: any) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err)
  }
};

/**
 * Find Category Service
 * @param req 
 * @param res 
 * @param next 
 */
export const findCategoryService = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const category = await Category.findById(req.params.id)
    if (!category) {
      const error: any = Error("Not Found!");
      error.statusCode = 404;
      throw error;
    }
    res.json({ data: category, status: 1 });
  } catch (err: any) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err)
  }
}

/**
 * Update Category Service
 * @param req 
 * @param res 
 * @param next 
 */
export const updateCategoryService = async (
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
    const category: any = await Category.findById(req.params.id);
    if (!category) {
      const error: any = new Error("Not Found!");
      error.statusCode = 404;
      throw error;
    }
    category.category = req.body.category;
    category.subcategories = req.body.subcategories
    const result = await category.save();
    res.json({ message: "Updated Successfully!", data: result, status: 1 });
  } catch (err: any) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err)
  }
};

/**
 * Delete Category Service
 * @param req 
 * @param res 
 * @param next 
 */
export const deleteCategoryService = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    const category: any = await Category.findById(req.params.id);
    if (!category) {
      const error: any = new Error("Not Found!");
      error.statusCode = 404;
      throw error;
    }
    category.deleted_at = new Date();
    await category.save();
    res.json({ message: "Deleted Successfully!", status: 1 });
  } catch (err: any) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err)
  }
};