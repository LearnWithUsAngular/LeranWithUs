const mongoose = require('mongoose');

const subcategorySchema = new mongoose.Schema({
  subcategory: {
    type: String,
    required: true
  },
  category_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "category",
  },
  deleted_at: {
    type: Date
  }
}, {
  timestamps: true
}
)
module.exports = mongoose.model("subcategory", subcategorySchema)