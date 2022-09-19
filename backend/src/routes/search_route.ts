import express from 'express';
import { searchAll } from '../controllers/SearchController';

const router = express.Router();

router.
    route("/")
    .post(searchAll)
export default router;