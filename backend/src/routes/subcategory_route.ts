import express from 'express';
import { body } from 'express-validator';
import { createSubcategory, deleteSubcategory, findSubategory, getSubcategory, updateSubcategory } from '../controllers/SubcategoryController';

const router = express.Router();

router
    .route('/')
    .get(getSubcategory)
    .post(
        [
            body("subcategory").notEmpty().withMessage("Subcategory Name must not be empty")
        ],
        createSubcategory)

router
    .route('/:id')
    .get(findSubategory)
    .put(
        [
            body("subcategory").notEmpty().withMessage("Subcategory Name must not be empty")
        ],
        updateSubcategory)
    .delete(deleteSubcategory)

// router
//     .route("/search")
//     .post(searchByCategory)

export default router;