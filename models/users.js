import mongoose from "mongoose";

const userSchema = mongoose.Schema({
	username: {
		type: String,
		unique: true,
		required:[true, "username"]
	},
	password: String
})

const userModel = mongoose.model('User', userSchema)

export default userModel;