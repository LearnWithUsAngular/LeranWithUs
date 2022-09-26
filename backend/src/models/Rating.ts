import { Schema, model } from 'mongoose';

const ratingSchema = new Schema({
  course_id: {
    type: Schema.Types.ObjectId,
    ref: "course",
    autopopulate: true
  },
  rating: {
    type: Number,
  },
  comment: {
    type: String,
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  deleted_at: {
    type: Date
  },
},
  {
    timestamps: true
  }
);
export default model("rating", ratingSchema)