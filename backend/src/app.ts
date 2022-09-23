import express, { Request } from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import passport from 'passport';
import multer, { FileFilterCallback } from 'multer';
import { v4 } from 'uuid';
import path from 'path';
import { rootDir } from './utils/deleteFile';
import instructor_route from './routes/instructor_route';
import course_route from './routes/course_route';
import course_video_route from './routes/course_video_route';
import auth_route from './routes/auth_route';
import category_route from './routes/category_route';
import user_route from './routes/user_route';
import search_route from './routes/search_route';
import error from './middlewares/error';
import * as swaggerUI from 'swagger-ui-express';
import * as YAML from 'yamljs';


require('./config/passport');
dotenv.config();

const swaggerDocument = YAML.load('./swagger/api.yaml');

const PORT = process.env.PORT;
const app = express();

const fileStorage = multer.diskStorage({
  destination: (_req, file, cb) => {
    switch (file.fieldname) {
      case "instructorProfile":
        cb(null, "apiUploads/instructors");
        break;
      case "userProfile":
        cb(null, 'apiUploads/users'); break;
      case "courseCover":
        cb(null, 'apiUploads/covers');
        break;
      case "video":
        cb(null, 'apiUploads/courses');
        break;
      default:
        cb(null, 'apiUploads/courses');
        break;
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
    file.mimetype === "image/jpeg" ||
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
  { name: 'video', maxCount: 1 },
  { name: 'courseCover', maxCount: 1 }
]));
app.use("/apiUploads", express.static(path.join(rootDir, "apiUploads")));

app.get("/", (_req, res) => {
  res.json({ message: "Welcome From Learn With Us API" });
})

mongoose
  .connect(process.env.DATABASE || "")
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    app.use('/api/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
    app.use("/api/categories", category_route);
    app.use("/api/users", user_route);
    app.use("/api/instructors", instructor_route);
    app.use("/api/course/video", course_video_route);
    app.use("/api/courses", course_route);
    app.use("/api", auth_route);
    app.use("/api/search", search_route);
    app.use(error)
  });
