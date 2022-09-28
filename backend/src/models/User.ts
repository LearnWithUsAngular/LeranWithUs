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
	phone: {
		type: String,
		default: ""
	},
	userProfile: {
		type: String,
		default: ""
	},
	isInstructor: {
		type: Boolean,
		default: false
	},
	// instructor_id: {
	// 	type: Schema.Types.ObjectId,
	// 	ref: "instructor",
	// 	autopopulate: true,
	// 	required: false
	// },
	deleted_at: {
		type: Date
	},
},
	{
		timestamps: true
	}
);
userSchema.plugin(require('mongoose-autopopulate'));
export default model("user", userSchema)