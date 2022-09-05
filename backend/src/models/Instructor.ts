import { Schema, model } from 'mongoose';

const instructorSchema = new Schema({
    intructorName: {
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
        type: Schema.Types.ObjectId,
        ref: "user"
    },
    deleted_at: {
        type: Date
    },
},
    {
        timestamps: true
    }
);
export default model("instructor", instructorSchema)