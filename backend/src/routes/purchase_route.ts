import express from 'express';
import { createPurchase, deletePurchase, findPurchase, getPurchase } from '../controllers/PurchaseController';

const router = express.Router();

router
  .route('/')
  .get(getPurchase)
  .post(createPurchase)

router
  .route('/:id')
  .get(findPurchase)
  .delete(deletePurchase)

export default router;