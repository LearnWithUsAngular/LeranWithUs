import express from 'express';
import { createUser } from '../controllers/UserController';
import { body } from 'express-validator';
import { logout, login } from '../controllers/AuthController';

const router = express.Router();

router
  .route("/login")
  .post(
    [
      body("email").notEmpty().withMessage("Email must not be empty"),
      body("password").notEmpty().withMessage("Password must not be empty")
    ],
    login);

router
  .route("/logout")
  .post(logout);

router
  .route("/signup")
  .post(
    [
      body("name").notEmpty().withMessage("Name must not be empty"),
      body("email").notEmpty().withMessage("Email must not be empty"),
      body("password").notEmpty().withMessage("Password must not be empty")
    ],
    createUser);

export default router;