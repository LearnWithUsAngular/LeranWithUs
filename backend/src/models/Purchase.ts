import { Schema, model } from 'mongoose';

const purchaseSchema = new Schema({
  course_id: {
    type: Schema.Types.ObjectId,
    ref: "course",
    // autopopulate: true
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "user",
    // autopopulate: true
  },
  deleted_at: {
    type: Date
  },
},
  {
    timestamps: true
  }
);
purchaseSchema.plugin(require('mongoose-autopopulate'));
export default model("purchase", purchaseSchema)