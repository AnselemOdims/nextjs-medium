import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import Link from 'next/link';

import Banner from '../components/banner';
import Header from '../components/header';
import { client, urlFor } from '../sanity';
import { Props } from '../typings';
import Card from '../components/Card';

const Home = ({ posts }: Props) => {
	return (
		<div className='' style={{ background: "#F7F7F8"}}>
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Header />
			<main>
				<Banner />
				<div className='grid gap-x-5 gap-y-10 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mx-auto my-3 md:max-w-2xl lg:max-w-4xl'>
					{posts &&
						posts.map((post) => (
							<>
								<Link href={`/post/${post.slug.current}`} key={post._id} passHref>
									<a>
										<Card
											postImg={urlFor(post.mainImage)?.url()}
											author={post.author.name}
											title={post.title}
											slug={post.slug.current}
										/>
									</a>
								</Link>		
								<Link href={`/post/${post.slug.current}`} key={post._id} passHref>
								<a>
									<Card
										postImg={urlFor(post.mainImage)?.url()}
										author={post.author.name}
										title={post.title}
										slug={post.slug.current}
									/>
								</a>
							</Link>	
						</>			
						))}
				</div>
			</main>
		</div>
	);
};

export const getServerSideProps = async () => {
	const query = `
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

	const posts = await client.fetch(query);
	console.log(posts);

	return {
		props: {
			posts,
		},
	};
};

export default Home;
