import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import Purchase from '../models/Purchase';

/**
 * get all Purchase Service
 * @param _req 
 * @param res 
 * @param next 
 */
export const getPurchaseService = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let condition: any = { deleted_at: null };
    const purchase = await Purchase.find(condition);
    res.json({ data: purchase, total: purchase.length, status: 1 });
  } catch (err) {
    next(err);
  }
};

/**
 * create PurchaseService
 * @param req 
 * @param res 
 * @param _next 
 */
export const createPurchaseService = async (req: Request, res: Response, _next: NextFunction) => {
  try {
    const errors = validationResult(req.body);
    if (!errors.isEmpty()) {
      const error: any = new Error("Validation failed!");
      error.data = errors.array();
      error.statusCode = 422;
      throw error;
    }
    const purchaseList = req.body;
    const result: any = await Purchase.insertMany(purchaseList);
    res
      .status(201)
      .json({ message: "Purchase Successfully!", data: result, status: 1 });
  } catch (err) {
    console.log(err)
  }
};

/**
 * find Purchase Service
 * @param req 
 * @param res 
 * @param next 
 */
export const findPurchaseService = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const purchaser = req.params.id
    let condition : any = { deleted_at: null, user_id: purchaser };    
    const result = await Purchase.find(condition)
    res.json({ data: result, total: result.length, status: 1 });
  } catch (err: any) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err)
  }
}