const dotenv = require('dotenv');
const fs = require('fs');
const colors = require('colors');
const mongoose = require('mongoose');
const express = require('express');

const app = express()
dotenv.config();

// Load Models
const User = require('./models/User');
const Category = require('./models/Category');
const CourseVideo = require('./models/CourseVideo');
const Course = require('./models/Course');
const Instructor = require('./models/Instructor');
const Subcategory = require('./models/Subcategory')

// Connect to Mongo Database
mongoose
  .connect(process.env.MONGO_URI || "")
  .then(() => {
    app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
  })

// Read The JSON files
const users = JSON.parse(fs.readFileSync(`${__dirname}/_seedData/users.json`, 'utf-8'));
const categories = JSON.parse(fs.readFileSync(`${__dirname}/_seedData/categories.json`, 'utf-8'));
const courseVideo = JSON.parse(fs.readFileSync(`${__dirname}/_seedData/courseVideos.json`, 'utf-8'));
const course = JSON.parse(fs.readFileSync(`${__dirname}/_seedData/courses.json`, 'utf-8'));
const instructor = JSON.parse(fs.readFileSync(`${__dirname}/_seedData/instructors.json`, 'utf-8'));
const subcategory = JSON.parse(fs.readFileSync(`${__dirname}/_seedData/subcategories.json`, 'utf-8'));

// Import Sample Data In DB
const importData = async () => {
  try {
    await User.create(users);
    await Category.create(categories);
    await CourseVideo.create(courseVideo);
    await Course.create(course);
    await Instructor.create(instructor);
    await Subcategory.create(subcategory);
    console.log(`Data successfully imported`.green.inverse);
    process.exit();
  } catch (err) {
    console.log(err);
  }
}

// Delete the data from DB
const deleteData = async () => {
  try {
    await User.deleteMany({});
    await Category.deleteMany({});
    await CourseVideo.deleteMany({});
    await Course.deleteMany({});
    await Instructor.deleteMany({});
    await Subcategory.deleteMany({});
    console.log(`Data successfully deleted`.red.inverse);
    process.exit();
  } catch (err) {
    console.log(err);
  }
}

if (process.argv[2] === '-i') {
  importData().then();
} else if (process.argv[2] === '-d') {
  deleteData().then();
}