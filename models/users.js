import mongoose from "mongoose";
import validate from 'mongoose-validator';

const userSchema = mongoose.Schema({
	username: {
		type: String,
		unique: true,
		required:[true, "el campo es requerido"],
		validate:[
			validate({
				validator:'isLength',
				arguments: [6,15],
				message: 'el nombre de usuario debe mantener entre {ARGS[0]} y {ARGS[1]}'
			}),
			validate({
				validator:'isAlphanumeric',
				message: 'el nombre de usuario debe ser alfanumerico '
			})
		]
	},
	password: String,
	fullname: String,
	desc: String,
	bio: String,
	email:{
		type: String,
		validate: validate({
				validator:'isEmail',
				message: 'Introduce un email valido'
		})
	},
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
