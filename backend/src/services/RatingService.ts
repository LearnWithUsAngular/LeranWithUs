import { Request, Response, NextFunction } from 'express';
import Rating from '../models/Rating';
import { logger } from '../logger/logger';

/**
 * Get Rating Service
 * @param _req 
 * @param res 
 * @param _next 
 */
export const getRatingService = async (
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  try {
    let condition: any = { deleted_at: null };
    const resume = await Rating.find(condition);
    res.json({ data: resume, status: 1 });
  } catch (err) {
    logger.error("Get Rating Service Error");
    logger.error(err);
    res.send("An error occured");
  }
};

/**
 * Create Rating Service
 * @param req 
 * @param res 
 * @param next 
 */
export const createRatingService = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    const ratingForm = {
      course_id: req.body.course_id,
      rating: req.body.rating,
      comment: req.body.comment
    };
    const rating = new Rating(ratingForm);
    const result = await rating.save();
    res
      .status(201)
      .json({ message: "Created Successfully!", data: result, status: 1 });
  } catch (err) {
    logger.error("Create Rating Service Error");
    logger.error(err);
    next(err);
  }
};

/**
 * Find Rating Service
 * @param req 
 * @param res 
 * @param next 
 */
export const findRatingService = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const rating = await Rating.findById(req.params.id)
    if (!rating) {
      const error: any = Error("Not Found!");
      error.statusCode = 404;
      throw error;
    }
    res.json({ data: rating, status: 1 });
  } catch (err: any) {
    logger.error('Get Rating By Id');
    logger.error(err);
    if (!err.statusCode) {
      err.statusCode = 403;
    }
    next(err)
  }
}

/**
 * Update Rating Service
 * @param req 
 * @param res 
 * @param next 
 */
export const updateRatingService = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    const rating: any = await Rating.findById(req.params.id);
    if (!rating) {
      const error: any = new Error("Not Found!");
      error.statusCode = 404;
      throw error;
    }
    rating.course_id = req.body.course_id;
    rating.rating = req.body.rating;
    rating.comment = req.body.comment;

    const result = await rating.save();
    res.json({ message: "Updated Successfully!", data: result, status: 1 });
  } catch (err: any) {
    logger.error('Rating Update API Error');
    logger.error(err);
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err)
  }
};

/**
 * Delete Rating Service
 * @param req 
 * @param res 
 * @param next 
 */
export const deleteRatingService = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    const rating: any = await Rating.findById(req.params.id);
    if (!rating) {
      const error: any = new Error("Not Found!");
      error.statusCode = 404;
      throw error;
    }
    rating.deleted_at = new Date();
    await rating.save();
    res.json({ message: "Deleted Successfully!", status: 1 });
  } catch (err: any) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    logger.error("Delete Rating service API error");
    logger.error(err);
    next(err)
  }
};