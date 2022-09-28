import { Request, Response, NextFunction } from 'express'
import { validationResult } from 'express-validator';
import Subcategory from '../models/Subcategory';
import Category from '../models/Category';
import { SubcategoryCreate } from '../interfaces/Subcategory';
import { logger } from '../logger/logger';

/**
 * Get Subcategory Service
 * @param _req 
 * @param res 
 * @param next 
 */
export const getSubcategoryService = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let condition: any = { deleted_at: null };
    const result = await Subcategory.find(condition).populate("category_id");
    const count = await Subcategory.count(condition);
    res.json({ data: result, total: count, status: 1 });
  } catch (err) {
    next(err);
    logger.error("Get Subcategory Service Error");
    logger.error(err);
  }
};

/**
 * Create Subcategory Service
 * @param req 
 * @param res 
 * @param next 
 */
export const createSubcategoryService = async (
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
    const subcategoryInsert: SubcategoryCreate = {
      subcategory: req.body.subcategory,
      category_id: req.body.category_id
    }
    const subcategory = new Subcategory(subcategoryInsert);
    const result = await subcategory.save();
    const category: any = await Category.findById(req.body.category_id);
    category?.subcategories.push(subcategory);
    await category?.save();
    res.status(201).json({ message: "Created Successfully", data: result, status: 1 })
  } catch (err: any) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    logger.error("Create Subcategory Service Error");
    logger.error(err);
    next(err)
  }
};

/**
 * Find Subcategory Service
 * @param req 
 * @param res 
 * @param next 
 */
export const findSubcategoryService = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const subcategory = await Subcategory.findById(req.params.id);
    if (!subcategory) {
      const error: any = Error("Not Found!");
      error.statusCode = 404;
      throw error;
    }
    res.json({ data: subcategory, status: 1 });
  } catch (err: any) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    logger.error("Find Subcategory Service Error");
    logger.error(err);
    next(err)
  }
}

/**
 * Update Subcategory Service
 * @param req 
 * @param res 
 * @param next 
 */
export const updateSubcategoryService = async (
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
    const subcategory: any = await Subcategory.findById(req.params.id);
    if (!subcategory) {
      const error: any = new Error("Not Found!");
      error.statusCode = 404;
      throw error;
    }
    subcategory.subcategory = req.body.subcategory;
    const result = await subcategory.save();
    res.json({ message: "Updated Successfully!", data: result, status: 1 });
  } catch (err: any) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    logger.error("Update Subcategory Service Error");
    logger.error(err);
    next(err)
  }
};

/**
 * Delete Subcategory Service
 * @param req 
 * @param res 
 * @param next 
 */
export const deleteSubcategoryService = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    const subcategory: any = await Subcategory.findById(req.params.id);
    if (!subcategory) {
      const error: any = new Error("Not Found!");
      error.statusCode = 404;
      throw error;
    }
    subcategory.deleted_at = new Date();
    await subcategory.save();
    res.json({ message: "Deleted Successfully!", status: 1 });
  } catch (err: any) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    logger.error("delete subcategory service error");
    logger.error(err);
    next(err)
  }
};

/**
 * Search by Subcategory Service
 * @param req 
 * @param res 
 * @param _next 
 */
export const searchBySubcategoryService = async (
  req: any,
  res: Response,
  _next: NextFunction
) => {
  try {
    const subcategory = await Subcategory.find({
      $and: [
        { $or: [{ subcategory: { '$regex': req.body.keyword, '$options': 'i' } }] },
        { $or: [{ deleted_at: null }] }
      ]
    }).populate("category_id");
    res.json({ data: subcategory, status: 1 });
  } catch (err: any) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
  }
}