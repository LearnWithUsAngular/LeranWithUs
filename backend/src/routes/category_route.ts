import express from 'express';
import { createCategory, deleteCategory, searchByCategory, findCategory, getCategory, updateCategory } from '../controllers/CategoryController';
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

router
  .route("/search")
  .post(searchByCategory)

export default router;