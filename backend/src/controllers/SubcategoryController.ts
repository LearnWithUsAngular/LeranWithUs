import { Request, Response, NextFunction } from 'express'
import { createSubcategoryService, deleteSubcategoryService, findSubcategoryService, getSubcategoryService, updateSubcategoryService } from '../services/SubcategoryService';


export const getSubcategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  getSubcategoryService(req, res, next);
};

export const createSubcategory = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  createSubcategoryService(req, res, next);
};

export const findSubcategory = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  findSubcategoryService(req, res, next);
};

export const updateSubcategory = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  updateSubcategoryService(req, res, next);
};

export const deleteSubcategory = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  deleteSubcategoryService(req, res, next);
};