import { Schema, model } from 'mongoose';

const instructorSchema = new Schema({
  instructorName: {
    type: String,
    required: true
  },
  headline: {
    type: String,
  },
  biography: {
    type: String,
  },
  instructorProfile: {
    type: String,
    default: ""
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "user",
    autopopulate: true
  },
  deleted_at: {
    type: Date
  },
},
  {
    timestamps: true
  }
);
instructorSchema.plugin(require('mongoose-autopopulate'));
export default model("instructor", instructorSchema)