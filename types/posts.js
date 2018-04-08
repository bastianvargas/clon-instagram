export default `

	type Post{
		_id: ID!
		by:User
		desc: String
		photo: String
		likeBy:[User]
		coments:[User]
		createdAt: String
	}

	input iBy{
		username: String!
		thumbnail: String
	}

	input iPost{
		by: iBy,
		desc: String,
		photo: String,

	}

	type Query{
		getPost(_id:ID!): Post!
	}


	type Mutation{
		createPost(post: iPost): Post!
	}

`;
