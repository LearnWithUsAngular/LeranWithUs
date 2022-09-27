import { Request, Response, NextFunction } from 'express';
import { getRatingService, createRatingService, findRatingService, updateRatingService, deleteRatingService } from '../services/RatingService';

/**
 * Get Rating
 * @param req 
 * @param res 
 * @param next 
 */
export const getRating = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  getRatingService(req, res, next);
};

/**
 * Create Rating
 * @param req 
 * @param res 
 * @param next 
 */
export const createRating = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  createRatingService(req, res, next);
};

/**
 * Find Rating
 * @param req 
 * @param res 
 * @param next 
 */
export const findRating = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  findRatingService(req, res, next);
}

/**
 * Update Rating
 * @param req 
 * @param res 
 * @param next 
 */
export const updateRating = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  updateRatingService(req, res, next);
};

/**
 * Delete Rating
 * @param req 
 * @param res 
 * @param next 
 */
export const deleteRating = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  deleteRatingService(req, res, next);
};