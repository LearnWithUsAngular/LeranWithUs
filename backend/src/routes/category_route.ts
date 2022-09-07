import express from 'express';
import { createCategory, deleteCategory, findCategory, getCategory, updateCategory } from '../controllers/CategoryController';
import { body } from 'express-validator';

const router = express.Router();

router
  .route('/')
  .get(getCategory)
  .post(
    [
      body("category").notEmpty().withMessage("Category Name must not be empty")
    ],
    createCategory)

router
  .route('/:id')
  .get(findCategory)
  .put(
    [
      body("category").notEmpty().withMessage("Category Name must not be empty")
    ],
    updateCategory)
  .delete(deleteCategory)

export default router;