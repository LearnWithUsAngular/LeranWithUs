import { Request, Response, NextFunction } from 'express'
import { createPurchaseService, findPurchaseService, getPurchaseService } from '../services/PurchaseService';

export const getPurchase = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  getPurchaseService(req, res, next);
};

export const createPurchase = async (
    req: any,
    res: Response,
    next: NextFunction
  ) => {
    createPurchaseService(req, res, next);
  };

  export const findPurchase = async (
    req: any,
    res: Response,
    next: NextFunction
  ) => {
    findPurchaseService(req, res, next);
  };