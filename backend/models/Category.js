const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  category: {
    type: String,
    required: true
  },
  subcategories: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "subcategory",
  }],
  deleted_at: {
    type: Date
  }
}, {
  timestamps: true
}
)
module.exports = mongoose.model('category', categorySchema);
