import { Schema, model } from "mongoose";


const priceSchema = new Schema(
  {
    currency: {
      type: String,
      enum: ['USD', 'AUD', 'MMK', 'SGD'],
      default: 'USD'
    },
    price: {
      type: String,
      enum: ['Free', '$19.99', '$24.99', '$34.99'],
      default: 'Free'
    },
    promocode: {
      type: String,
      default: ''
    }
  }
);

const courseSchema = new Schema(
  {
    detail: {
      title: {
        type: String,
        // required: true
      },
      subtitle: {
        type: String,
        // required: true
      },
      description: {
        type: String,
        // required: true
      },
      language: {
        type: String,
        enum: ['English', 'Myanmar'],
      },
      level: {
        type: String,
        enum: ['Beginner', 'Intermediate', 'Expert', 'All Level'],
      },
      category_id: {
        type: Schema.Types.ObjectId,
        ref: "category",
        autopopulate: true
      },
      courseCover: {
        type: String,
        // required: true
      }
    },
    coursePrice: priceSchema,
    courseUpload: [String],
    instructor_id: {
      type: Schema.Types.ObjectId,
      ref: "instructor",
      autopopulate: true
    },
    deleted_at: {
      type: Date
    }
  }, {
  timestamps: true
}
)

courseSchema.plugin(require('mongoose-autopopulate'));
export default model("course", courseSchema)