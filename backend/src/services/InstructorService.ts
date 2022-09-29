import { Request, Response, NextFunction } from 'express'
import { validationResult } from 'express-validator';
import Instructor from '../models/Instructor';
import { deleteFile } from '../utils/deleteFile';
import { logger } from '../logger/logger';

/**
 * Get Instructor Service
 * @param _req 
 * @param res 
 * @param next 
 */
export const getInstructorService = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let condition: any = { deleted_at: null };
    const result = await Instructor.find(condition).populate({ path: 'user_id' })
    const count = await Instructor.count(condition);
    res.json({ data: result, total: count, status: 1 });
  } catch (err) {
    logger.error("Get Instructor Service Error");
    logger.error(err);
    next(err);
  }
};

/**
 * Create Instructor Service
 * @param req 
 * @param res 
 * @param next 
 */
export const createInstructorService = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    const errors = validationResult(req.body);
    if (!errors.isEmpty()) {
      const error: any = new Error("Validation failed!");
      error.data = errors.array();
      error.statusCode = 422;
      throw error;
    }
    let instructorProfile: string = req.body.instructorProfile;
    if (req?.files?.instructorProfile?.length > 0) {
      instructorProfile = req.files.instructorProfile[0].path.replaceAll("\\", "/");
    }
    const instructorInsert = {
      instructorName: req.body.instructorName,
      headline: req.body.headline,
      biography: req.body.biography,
      instructorProfile: instructorProfile,
      user_id: req.body.user_id
    }
    const instructor = new Instructor(instructorInsert);
    const result = await instructor.save();
    res.status(201).json({ message: "Created Successfully", data: result, status: 1 })
  } catch (err: any) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    logger.error("Create Instructor Server Error");
    logger.error(err);
    next(err)
  }
};

/**
 * Find Instructor Service
 * @param req 
 * @param res 
 * @param next 
 */
export const findInstructorService = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const instructor = await Instructor.findById(req.params.id);
    if (!instructor) {
      const error: any = Error("Not Found!");
      error.statusCode = 404;
      throw error;
    }
    res.json({ data: instructor, status: 1 });
  } catch (err) {
    logger.error("Find Instructor Service Error");
    logger.error(err);
    next(err)
  }
}

/**
 * Update Instructor Service
 * @param req 
 * @param res 
 * @param next 
 */
export const updateInstructorService = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    const errors = validationResult(req.body);
    if (!errors.isEmpty()) {
      const error: any = new Error("Validation failed!");
      error.data = errors.array();
      error.statusCode = 422;
      throw error;
    }
    const instructor: any = await Instructor.findById(req.params.id);
    if (!instructor) {
      const error: any = new Error("Not Found!");
      error.statusCode = 404;
      throw error;
    }
    let instructorProfile: string = req.body.instructorProfile;
    if (req?.files?.instructorProfile?.length > 0) {
      instructorProfile = req.files.instructorProfile[0].path.replaceAll("\\", "/");
      if (instructor.instructorProfile && instructor.instructorProfile != instructorProfile) {
        deleteFile(instructor.instructorProfile);
      }
      if (instructorProfile) {
        instructor.instructorProfile = instructorProfile;
      }
    }
    instructor.instructorName = req.body.instructorName;
    instructor.headline = req.body.headline;
    instructor.biography = req.body.biography;
    const result = await instructor.save();
    res.json({ message: "Updated Instructor Successfully!", data: result, status: 1 });
  } catch (err) {
    logger.error("Update Instructor Service Error");
    logger.error(err);
    next(err)
  }
};

/**
 * Delete Instructor Service
 * @param req 
 * @param res 
 * @param next 
 */
export const deleteInstructorService = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    const instructor: any = await Instructor.findById(req.params.id);
    if (!instructor) {
      const error: any = new Error("Not Found!");
      error.statusCode = 404;
      throw error;
    }
    instructor.deleted_at = new Date();
    const result = await instructor.save();
    res.json({ message: "Delete Instructor Successfully!", data: result, status: 1 });
  } catch (err) {
    logger.error("Delete Instructor Service Error");
    logger.error(err);
    next(err)
  }
};

/**
 * Search by Instructor Service
 * @param req 
 * @param res 
 * @param _next 
 */
 export const searchByInstructorService = async (
  req: any,
  res: Response,
  _next: NextFunction
) => {
  try {
    let condition: any = { deleted_at: null };
    req.body?.instructorName ? condition.instructorName = { '$regex': req.body.instructorName, '$options': 'i' } : '';

    const instructor = await Instructor.find(condition);
    res.json({ data: instructor, status: 1 });
  } catch (err: any) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
  }
}