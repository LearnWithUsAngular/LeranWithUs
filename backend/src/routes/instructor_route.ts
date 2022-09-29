import express from 'express';
import { getInstructor, createInstructor, findInstructor, updateInstructor, deleteInstructor, searchByInstructor } from '../controllers/InstructorController';
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

router
  .route("/search")
  .post(searchByInstructor)
export default router;