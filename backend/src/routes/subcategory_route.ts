import express from 'express';
import { body } from 'express-validator';
import { createSubcategory, getSubcategory } from '../controllers/SubcategoryController';

const router = express.Router();

router
    .route('/')
    .get(getSubcategory)
    .post(
        [
            body("subcategory").notEmpty().withMessage("Subcategory Name must not be empty"),
            body("category_id").notEmpty().withMessage("Category must not be empty"),
        ],
    createSubcategory)
export default router;