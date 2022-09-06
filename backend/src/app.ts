import express, { Request } from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import category_route from './routes/category_route';
import subcategory_route from './routes/subcategory_route';
import user_route from './routes/user_route';
import instructor_route from './routes/instructor_route';
import course_route from './routes/course_route';
import auth_route from './routes/auth_route';
import error from './middlewares/error';
import cors from 'cors';
import multer, { FileFilterCallback } from 'multer';
import { v4 } from 'uuid';
import { rootDir } from './utils/deleteFile';
import path from 'path';
import passport from 'passport';
const bodyParser = require('body-parser');

require('./config/passport');

dotenv.config();

const PORT = process.env.PORT;

const app = express();

const fileStorage = multer.diskStorage({
    destination: (_req, file, cb) => {
        if (file.fieldname === "instructorProfile") {
            cb(null, "apiUploads/instructors");
        }
        else if (file.fieldname === "userProfile") {
            cb(null, 'apiUploads/users');
        }
        else if (file.fieldname === "courseCover") {
            cb(null, 'apiUploads/covers');
        }
        else {
            cb(null, 'apiUploads/courses');
        }
    },
    filename: (_req, file, cb) => {
        cb(null, `${v4()}_${file.originalname}`);
    },
});

const fileFilter = (_req: Request, file: any, cb: FileFilterCallback) => {
    if (
        file.mimetype === "image/png" ||
        file.mimetype === "image/jpg" ||
        file.mimetype === "image/jpeg"||
        file.mimetype === "video/mp4" ||
        file.mimetype === "video/mkv" ||
        file.mimetype === "video/avi"
    ) {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(passport.initialize());

app.use(multer({ storage: fileStorage, fileFilter }).fields([
    { name: 'instructorProfile', maxCount: 1 }, 
    { name: 'userProfile', maxCount: 1 }, 
    { name: 'courseVideo', maxCount: 10 }, 
    { name: 'courseCover', maxCount: 1 }
]));
app.use("/apiUploads", express.static(path.join(rootDir, "apiUploads")));

mongoose
    .connect(process.env.DATABASE || "")
    .then(() => {
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
        app.use("/api/categories", passport.authenticate('jwt', { session: false }), category_route);
        app.use("/api/subcategories", passport.authenticate('jwt', { session: false }), subcategory_route);
        app.use("/api/users", passport.authenticate('jwt', { session: false }), user_route);
        app.use("/api/instructors", passport.authenticate('jwt', { session: false }), instructor_route);
        app.use("/api/courses", course_route);
        app.use("/api", auth_route);
        app.use(error)
    }
    );

app.get("/", (_req, res) => {
    res.json({ message: "Welcome From Learn With Us API" });
})

