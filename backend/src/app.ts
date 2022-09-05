import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import category_route from './routes/category_route';
import subcategory_route from './routes/subcategory_route';
import error from './middlewares/error';
import cors from 'cors';
const bodyParser = require('body-parser');

dotenv.config();

const PORT = process.env.PORT;

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

mongoose
    .connect(process.env.DATABASE || "")
    .then(()=> {
            app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
            app.use("/api/categories", category_route);
            app.use("/api/subcategories", subcategory_route);
            app.use(error)
        }
    );

app.get("/", (_req, res) => {
    res.json({ message: "Welcome From Learn With Us API" });
})
