import { Response, NextFunction } from 'express';
import { searchAllService } from '../services/SearchService';

export const searchAll = async (
    req: any,
    res: Response,
    next: NextFunction
  ) => {
    searchAllService(req, res, next);
  }