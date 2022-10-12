import { Request, Response, NextFunction } from 'express'
import { createPurchaseService, deletePurchaseService, findPurchaseService, getPurchaseService } from '../services/PurchaseService';

/**
 * get all Purchase
 * @param req 
 * @param res 
 * @param next 
 */
export const getPurchase = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  getPurchaseService(req, res, next);
};

/**
 * create Purchase
 * @param req 
 * @param res 
 * @param next 
 */
export const createPurchase = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  createPurchaseService(req, res, next);
};

/**
 * find Purchase
 * @param req 
 * @param res 
 * @param next 
 */
export const findPurchase = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  findPurchaseService(req, res, next);
};

/**
 * Delete Purchase
 * @param req 
 * @param res 
 * @param next 
 */
 export const deletePurchase = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  deletePurchaseService(req, res, next);
};