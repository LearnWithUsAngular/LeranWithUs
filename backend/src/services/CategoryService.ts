import { Request, Response, NextFunction } from 'express'
import { validationResult } from 'express-validator';
import Category from '../models/Category';
import { CategoryCreate } from '../interfaces/Category';

export const getCategoryService = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // const page: any = req.query.page || 0;
    // const categoryPerPage: any = req.query.cpp || 5;

    let condition: any = { deleted_at: null };
    const result = await Category
      .find(condition)
      .populate('subcategories.subcategory')
    // .populate({ path: 'subcategory._id', model: 'subcategory', select: 'subcategory'})
    // .populate({
    //     path: 'subcategory',
    //     model: 'subcategory',
    //     select: 'subcategory'
    // })

    // .skip(page * categoryPerPage)
    // .limit(categoryPerPage)

    res.json({ data: result, status: 1 });
  } catch (err) {
    next(err);
  }
};

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
    next(err)
  }
};

export const findCategoryService = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const category = await Category.findById(req.params.id).populate("subcategory");
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
    next(err)
  }
};

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