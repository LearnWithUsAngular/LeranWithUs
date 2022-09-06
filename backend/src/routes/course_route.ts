import express from 'express';
import { createCourse, getCourse } from '../controllers/CourseController';
0
const router = express.Router();

router
    .route('/')
    .get(getCourse)
    .post(createCourse)

export default router;