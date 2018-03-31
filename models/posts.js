import mongoose from "mongoose";

const postSchema = mongoose.Schema({
	by:{
		type:{},
		required:true
	},
	desc: String,
	photo: String,
	likeBy:{
		type:[],
		default:[]
	},
	coments:{
		type:[],
		default:[]
	},
	createdAt: {
		type: String,
		default: new Date
	}

})

const postModel = mongoose.model('Post', postSchema)

export default postModel;