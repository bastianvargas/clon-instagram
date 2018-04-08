import mongoose from "mongoose";

const userSchema = mongoose.Schema({
	username: {
		type: String,
		unique: true,
		required:[true, "username"]
	},
	password: String,
	fullname: String,
	desc: String,
	bio: String,
	email: String,
	thumbnail: "String",
	post : {
		type:[],
		default: []
	},
	followeing: {
		type: [],
		default: []
	},
	followers: {
		type: [],
		default: []
	}
})

const userModel = mongoose.model('User', userSchema)

export default userModel;
