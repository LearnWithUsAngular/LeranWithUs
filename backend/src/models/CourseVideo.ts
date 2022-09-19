import { Schema, model } from "mongoose";

const courseVideoSchema = new Schema(
  {
    courseName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    courseURL: {
      type: String,
      // required: true,
    }
  }, {
  timestamps: true
  }
)

export default model("courseVideo", courseVideoSchema)