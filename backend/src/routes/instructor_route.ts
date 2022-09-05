import express from 'express';
import { getInstructor, createInstructor } from '../controllers/InstructorController';
const router = express.Router();

router
    .route('/')
    .get(getInstructor)
    .post(createInstructor)

export default router;