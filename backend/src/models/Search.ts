import { Schema, model } from "mongoose";

const searchSchema = new Schema({
  category_id: {
    type: Schema.Types.ObjectId,
    ref: "category"
  },
  course_id: {
    type: Schema.Types.ObjectId,
    ref: "course"
  },
  instructor_id: {
    type: Schema.Types.ObjectId,
    ref: "instructor"
  },
  deleted_at: {
    type: Date
  }
}, {
  timestamps: true
}
)
export default model("search", searchSchema)