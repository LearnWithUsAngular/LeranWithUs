import express from 'express';
import { contactMail } from '../controllers/ContactController';

const router = express.Router();

router
  .route('/')
  .post(contactMail)

export default router;