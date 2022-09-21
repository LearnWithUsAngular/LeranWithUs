import { Schema, model } from "mongoose";

const courseVideoSchema = new Schema(
  {
    courseName: {
      type: String,
      required: true,
    },
    description: {
      type: String
    },
    video: {
      type: String
    }
  }, {
  timestamps: true
  }
)

export default model("courseVideo", courseVideoSchema)