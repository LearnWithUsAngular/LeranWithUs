import express from 'express';
import { createCategory, getCategory } from '../controllers/CategoryController';

const router = express.Router();


router
    .route('/')
    .get(getCategory)
    .post(createCategory)

export default router;