import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import Purchase from '../models/Purchase';

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

export const findPurchaseService = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const purchaser = req.params.id
    let condition : any = { deleted_at: null, user_id: purchaser };    
    const result = await Purchase.find(condition)
    res.json({ data: result, status: 1 });
  } catch (err: any) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err)
  }
}