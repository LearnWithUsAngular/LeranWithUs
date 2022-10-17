const mongoose = require('mongoose')

const courseVideoSchema = new mongoose.Schema(
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

module.exports = mongoose.model('courseVideo',courseVideoSchema);