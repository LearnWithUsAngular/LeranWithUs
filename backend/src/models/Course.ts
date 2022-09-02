import { Schema, model } from "mongoose";

const detailSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    subtitle: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    language: {
        type: String,
        enum: ['Engish', 'Myanmar'],
        default: 'English'
    },
    level: {
        type: String,
        enum: ['Beginner', 'Intermediate', 'Expert', 'All Level'],
        default: ''
    },
    category_id: {
        type: Schema.Types.ObjectId,
        ref: "category"
    },
    subcategory_id: {
        type: Schema.Types.ObjectId,
        ref: "subcategory"
    },
    photo: {
        type: String,
        required: true
    }
}
)


const priceSchema = new Schema(
    {
        currency: {
            type: String,
            enum: ['USD', 'AUD', 'MM', 'SGD'],
            default: 'USD'
        },
        price: {
            type: String,
            enum: ['Free', '$19.99', '$24.99', '$34.99'],
            default: 'USD'
        },
        promocode: {
            type: String,
            default: ''
        }
    }
)

const courseuploadSchema = new Schema(
    {
        name: {
            type: String,
            enum: ['USD', 'AUD', 'MM', 'SGD'],
            default: 'USD'
        },
        description: {
            type: String,
            enum: ['Free', '$19.99', '$24.99', '$34.99'],
            default: 'USD'
        },
        video: {
            type: String,
            default: ''
        }
    }
)

const courseSchema = new Schema(
    {
        detail: detailSchema,
        price: priceSchema,
        couseUpload: [ courseuploadSchema ],
        instructor_id: {
            type: Schema.Types.ObjectId,
            ref: "instructor"
        },
        deleted_at: {
            type: Date
        }
        },{
            timestamps: true
        }
)

export default model("course", courseSchema)