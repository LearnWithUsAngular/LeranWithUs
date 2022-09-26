import { Request, Response, NextFunction } from 'express'
import { validationResult } from 'express-validator';
import Category from '../models/Category';
import Subcategory from '../models/Subcategory';
import { CategoryCreate } from '../interfaces/Category';
import { logger } from '../logger/logger';

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
    const result = await Category.find(condition).populate("subcategories");
    const count = await Category.count(condition);
    res.json({ data: result, total: count, status: 1 });
  } catch (err) {
    next(err);
    logger.error("Get Category Service Error");
    logger.error(err);
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
      category: req.body.category
    }
    const category = new Category(categoryInsert);
    const result = await category.save();
    res.status(201).json({ message: "Created Successfully", data: result, status: 1 })
  } catch (err: any) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    logger.error("Create Category Service Error");
    logger.error(err);
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
    const category = await Category.findById(req.params.id).populate("subcategories")
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
    logger.error("Find Category Service Error");
    logger.error(err);
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
    const result = await category.save();
    res.json({ message: "Updated Successfully!", data: result, status: 1 });
  } catch (err: any) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    logger.error("Update Category Service Error");
    logger.error(err);
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

    const subcategories: any = await Subcategory.find({ category_id: req.params.id});
    subcategories.forEach(async (a: any) => {
      a.deleted_at = new Date();
      await a.save();
    });

    res.json({ message: "Deleted Successfully!", status: 1 });
  } catch (err: any) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    logger.error("delete category service error");
    logger.error(err);
    next(err)
  }
};

/**
 * Search by Category Service
 * @param req 
 * @param res 
 * @param _next 
 */
export const searchByCategoryService = async (
  req: any,
  res: Response,
  _next: NextFunction
) => {
  try {
    if(!req.body.keyword) {
      let condition: any = { deleted_at: null };
      const result = await Category.find(condition).populate("subcategories");
      const count = await Category.count(condition);
      res.json({ data: result, total: count, status: 1 });
    }
    
    if(req.body.keyword) {
      // let condition: any = { deleted_at: null };
      // const category = await Category.find({
      //   $and: [
      //     { $or: [{ category: { '$regex': req.body.keyword, '$options': 'i' }}] },
      //     { $or: [ condition ] },
      //     { "$or": [{ "subcategories.deleted_at" : ""}]}
      //     // need to filter subcategory deleted_at condition
      //   ]
      // }).populate("subcategories");
      const category = await Category.find({ "subcategory": "Test Subcat1" }).populate("subcategories")
      // console.log(category)
      
      res.json({ data: category, status: 1 });
    }
  } catch (err: any) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
  }
}