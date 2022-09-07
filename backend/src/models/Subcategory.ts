import { Schema, model } from "mongoose";

const subcategorySchema = new Schema({
  subcategory: {
    type: String,
    required: true
  },
  category_id: {
    type: Schema.Types.ObjectId,
    ref: "category"
  },
  deleted_at: {
    type: Date
  }
}, {
  timestamps: true
}
)
export default model("subcategory", subcategorySchema)