import express, { Request } from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import category_route from './routes/category_route';
import subcategory_route from './routes/subcategory_route';
import user_route from './routes/user_route';
import instructor_route from './routes/instructor_route';
import error from './middlewares/error';
import cors from 'cors';
import multer, { FileFilterCallback } from 'multer';
import { v4 } from 'uuid';
import { rootDir } from './utils/deleteFile';
import path from 'path';
const bodyParser = require('body-parser');

dotenv.config();

const PORT = process.env.PORT;

const app = express();

const fileStorage = multer.diskStorage({
    destination: (_req, file, cb) => {
        if (file.fieldname === "instructorProfile") {
            cb(null, "iProfileUploads");
        }
        else if (file.fieldname === "userProfile") {
            cb(null, 'uProfileUploads');
        }

    },
    filename: (_req, file, cb) => {
        if (file.fieldname === "instructorProfile") {
            cb(null, `${v4()}_${file.originalname}`);
        }
        else if (file.fieldname === "userProfile") {
            cb(null, `${v4()}_${file.originalname}`);
        }
    },
});

const fileFilter = (_req: Request, file: any, cb: FileFilterCallback) => {
    if (
        file.mimetype === "image/png" ||
        file.mimetype === "image/jpg" ||
        file.mimetype === "image/jpeg"
    ) {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(multer({ storage: fileStorage, fileFilter }).fields([{ name: 'instructorProfile', maxCount: 1 }, { name: 'userProfile', maxCount: 1 }]));
app.use("/iProfileUploads", express.static(path.join(rootDir, "iProfileUploads")));
app.use("/uProfileUploads", express.static(path.join(rootDir, "uProfileUploads")));

mongoose
    .connect(process.env.DATABASE || "")
    .then(() => {
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
        app.use("/api/categories", category_route);
        app.use("/api/subcategories", subcategory_route);
        app.use("/api/users", user_route);
        app.use("/api/instructors", instructor_route);
        app.use(error)
    }
    );

app.get("/", (_req, res) => {
    res.json({ message: "Welcome From Learn With Us API" });
})

