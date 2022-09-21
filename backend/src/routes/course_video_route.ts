import express from 'express';
import { body } from 'express-validator';
import { createCourseVideo, getCourseVideo, findCourseVideo, deleteCourseVideo, updateCourseVideo } from '../controllers/CourseVideoController';

const router = express.Router();

router
  .route('/')
  .get(getCourseVideo)
  .post(
    [
      body("courseName").notEmpty().withMessage("Course Name must note be empty"),
      body("video").notEmpty().withMessage("Course Video URL must not be empty")
    ],
    createCourseVideo
  )

router
  .route('/:id')
  .get(findCourseVideo)
  .put(
    [
      body("courseName").notEmpty().withMessage("Course Name must note be empty"),
      body("video").notEmpty().withMessage("Course Video URL must not be empty")
    ],
    updateCourseVideo
  )
  .delete(deleteCourseVideo)

export default router;