const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
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
	deleted_at: {
		type: Date
	},
},
	{
		timestamps: true
	}
);
// export default model("user", userSchema)
module.exports = mongoose.model('user', userSchema);