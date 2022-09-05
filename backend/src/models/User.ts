import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
    },
    type: {
        type: String,
        enum: ['Admin', 'User'],
        default: 'User'
    },
    phone: {
        type: String,
        default: ""
    },
    profile: {
        type: String,
        default: ""
    },
    deleted_at: {
        type: Date
    },
},
    {
        timestamps: true
    }
);
export default model("user", userSchema)