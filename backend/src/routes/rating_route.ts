import express from 'express';
import { createRating, getRating, findRating, deleteRating, updateRating } from '../controllers/RatingController';

const router = express.Router();

router
  .route('/')
  .get(getRating)
  .post(createRating)

router
  .route('/:id')
  .get(findRating)
  .put(updateRating)
  .delete(deleteRating)

export default router;