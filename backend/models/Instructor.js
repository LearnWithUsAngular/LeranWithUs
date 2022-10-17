const mongoose = require('mongoose')

const instructorSchema = new mongoose.Schema({
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
    type: mongoose.Schema.Types.ObjectId,
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
module.exports = mongoose.model('instructor',instructorSchema);