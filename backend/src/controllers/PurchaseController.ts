import { Request, Response, NextFunction } from 'express'
import { createPurchaseService, findPurchaseService, getPurchaseService } from '../services/PurchaseService';

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