import bcrypt from 'bcrypt';

const formatErrors = (error,othersErrors)=>{
	const errors=error.errors;
	let objErrors= []

	if(errors){
		Object.entries(errors).map(error=>{
			const {path, message} = error[1];
			objErrors.push({path, message})
		})
		objErrors = objErrors.concat(othersErrors)
		return objErrors;
	}else if(othersErrors.length){
			return othersErrors;
	}

	const uknownError = {}
	switch (error.code) {
		case 11000:
			uknownError.path = "username"
			uknownError.message = "el nombre de usuario ya existe"
		break;
		default :
		 	uknownError.path = "Desconocido"
			uknownError.message = error.message
	}
	return [uknownError]
}

export default {
	Query: {
		allUsers: (parent, args, {models}) => models.User.find(),
		getUser: (parent, args, {models}) => models.User.findOne(args)
	},
	Mutation: {
		createUser: async(parent, {password, ...args}, {models}) => {
			const othersErrors = []
			try{
				if(password.length<8){
					othersErrors.push({path:'password', message:'Password debe ser mayor a 8 caracteres'})
				}
				const hashPassword = await bcrypt.hash(password, 10)
				const user = await models.User.create({...args, password: hashPassword})

				if(othersErrors.length){
					throw othersErrors;
				}
				return{
					success: user && user._id,
					errors: []
				};
			}catch(error){
				return {
					success: false,
					errors: formatErrors(error,othersErrors)
				}
			}
		}
	}
}
