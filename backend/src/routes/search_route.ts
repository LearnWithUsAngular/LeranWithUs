import express from 'express';
import { searchAll, searchByLevel } from '../controllers/SearchController';

const router = express.Router();

router.
    route("/")
    .post(searchAll)

router.
    route("/level")
    .post(searchByLevel)
export default router;