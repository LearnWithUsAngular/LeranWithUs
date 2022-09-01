import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import category_route from './routes/category_route';

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

mongoose.connect(process.env.DATABASE || "").then(()=> {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    app.use("api/categories/", category_route);
});

app.get("/", (_req, res) => {
    res.json({ message: "Welcome From Learn With Us API" });
})
