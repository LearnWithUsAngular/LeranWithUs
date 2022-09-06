import { Schema, model } from "mongoose";

// const detailSchema = new Schema({
//     title: {
//         type: String,
//         // required: true
//     },
//     subtitle: {
//         type: String,
//         // required: true
//     },
//     description: {
//         type: String,
//         // required: true
//     },
//     language: {
//         type: String,
//         enum: ['Engish', 'Myanmar'],
//     },
//     level: {
//         type: String,
//         enum: ['Beginner', 'Intermediate', 'Expert', 'All Level'],
//     },
//     category_id: {
//         type: Schema.Types.ObjectId,
//         ref: "category"
//     },
//     subcategory_id: {
//         type: Schema.Types.ObjectId,
//         ref: "subcategory"
//     },
//     courseCover: {
//         type: String,
//         // required: true
//     }
// }
// )

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
            default: 'Free'
        },
        promocode: {
            type: String,
            default: ''
        }
    }
)

const courseuploadSchema = new Schema(
    {
        courseName: {
            type: String,
        },
        description: {
            type: String,
        },
        courseVideo: {
            type: String,
            default: ''
        }
    }
)

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
                enum: ['Engish', 'Myanmar'],
            },
            level: {
                type: String,
                enum: ['Beginner', 'Intermediate', 'Expert', 'All Level'],
            },
            category_id: {
                type: Schema.Types.ObjectId,
                ref: "category"
            },
            subcategory_id: {
                type: Schema.Types.ObjectId,
                ref: "subcategory"
            },
            courseCover: {
                type: String,
                // required: true
            }
        },
        coursePrice: priceSchema,
        courseUpload: [ courseuploadSchema ],
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