import express from 'express';
import { body } from 'express-validator';
import { createUser, deleteUser, findUser, getUser, searchByUser, updateUser } from '../controllers/UserController';

const router = express.Router();

router
  .route('/')
  .get(getUser)
  .post(
    [
      body("name").notEmpty().withMessage("Name must note be empty"),
      body("email").notEmpty().withMessage("Email must note be empty"),
      body("password").notEmpty().withMessage("Password must not be empty")
    ],
    createUser)

router
  .route("/:id")
  .get(findUser)
  .put(updateUser)
  .delete(deleteUser)

router
  .route("/search")
  .post(searchByUser)
export default router;