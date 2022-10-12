import express from 'express';
import { createPurchase, findPurchase, getPurchase } from '../controllers/PurchaseController';

const router = express.Router();

router
  .route('/')
  .get(getPurchase)
  .post(createPurchase)

router
  .route('/:id')
  .get(findPurchase)

export default router;