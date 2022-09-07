import express from 'express';
// import { body } from 'express-validator';
import { createSubcategory, findSubcategory, getSubcategory, updateSubcategory, deleteSubcategory } from '../controllers/SubcategoryController';

const router = express.Router();

router
  .route('/')
  .get(getSubcategory)
  .post(
    // [
    //     body("subcategory").notEmpty().withMessage("Subcategory Name must not be empty"),
    //     body("category_id").notEmpty().withMessage("Category must not be empty"),
    // ],
    createSubcategory)

router
  .route('/:id')
  .get(findSubcategory)
  .put(
    updateSubcategory)
  .delete(deleteSubcategory)
export default router;