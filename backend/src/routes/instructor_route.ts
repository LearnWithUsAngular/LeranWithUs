import express from 'express';
import { getInstructor, createInstructor, findInstructor, updateInstructor, deleteInstructor } from '../controllers/InstructorController';
const router = express.Router();

router
  .route('/')
  .get(getInstructor)
  .post(createInstructor)

router
  .route("/:id")
  .get(findInstructor)
  .put(updateInstructor)
  .delete(deleteInstructor)

export default router;