export const queryAllPosts = `
		*[_type == 'post']
		{
			_id,
			title,
			description,
			slug,
			author -> {
				name,
				image,
				bio
			},
			mainImage,
			categories,
			publishedAt,
			body
		}
	`;

export const querySinglePost = (slug: string) => `
		*[_type == 'post' && slug.current == '${slug}' ][0]
		{
			_id,
			title,
			description,
			slug,
			author -> {
				name,
				image,
				bio
			},
			mainImage,
			categories,
			publishedAt,
			body
		}
`