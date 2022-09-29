import { Schema, model } from "mongoose";

const categorySchema = new Schema({
  category: {
    type: String,
    required: true
  },
  subcategories: [{
    type: Schema.Types.ObjectId,
    ref: "subcategory",
  }],
  deleted_at: {
    type: Date
  }
}, {
  timestamps: true
}
)
export default model("category", categorySchema)
