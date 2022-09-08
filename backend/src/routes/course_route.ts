import express from 'express';
import { createCourse, getCourse, findCourse, deleteCourse, updateCourse } from '../controllers/CourseController';
0
const router = express.Router();

router
  .route('/')
  .get(getCourse)
  .post(createCourse)

router
  .route('/:id')
  .get(findCourse)
  .put(updateCourse)
  .delete(deleteCourse)

export default router;