import { Response, NextFunction } from 'express';
import { searchAllService, searchByLevelService } from '../services/SearchService';

export const searchAll = async (
    req: any,
    res: Response,
    next: NextFunction
  ) => {
    searchAllService(req, res, next);
  }

  export const searchByLevel = async (
    req: any,
    res: Response,
    next: NextFunction
  ) => {
    searchByLevelService(req, res, next);
  }