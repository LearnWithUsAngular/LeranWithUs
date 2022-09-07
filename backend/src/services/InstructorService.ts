import { Request, Response, NextFunction } from 'express'
import { validationResult } from 'express-validator';
import Instructor from '../models/Instructor';
import { deleteFile } from '../utils/deleteFile';

export const getInstructorService = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // const page: any = req.query.page || 0;
    // const instructorPerPage: any = req.query.ipp || 5;

    let condition: any = { deleted_at: null };
    const result = await Instructor.find(condition).populate({ path: 'user_id' })
    // .skip(page * instructorPerPage)
    // .limit(instructorPerPage);
    res.json({ data: result, status: 1 });
  } catch (err) {
    next(err);
  }
};

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
    if (req.files) {
      instructorProfile = req.files.instructorProfile[0].path.replace("\\", "/");
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
    next(err)
  }
};

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
    next(err)
  }
}

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
    if (req.files) {
      instructorProfile = req.files.instructorProfile[0].path.replace("\\", "/");
      if (instructor.instructorProfile && instructor.instructorProfile != instructorProfile) {
        deleteFile(instructor.instructorProfile);
      }
      if (instructorProfile) {
        instructor.instructorProfile = instructorProfile;
      }
    }
    instructor.instructureName = req.body.instructorName;
    instructor.headline = req.body.headline;
    instructor.biography = req.body.biography;
    const result = await instructor.save();
    res.json({ message: "Updated Instructor Successfully!", data: result, status: 1 });
  } catch (err) {
    next(err)
  }
};

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
    next(err)
  }
};