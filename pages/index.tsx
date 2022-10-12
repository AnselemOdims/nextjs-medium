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
	console.log(posts)
	return (
		<div className=''>
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Header />
			<main >
				<Banner />
				{posts && posts.map(post => (
					<Link href={`/post/${post.slug.current}`} key={post._id}>
						<Card 
							postImg={urlFor(post.mainImage)?.url()}
							author={post.author.name}
							title={post.title}
						/>
					</Link>
				))}
			</main>
		</div>
	);
};

export const getServerSideProps = async () => {
	const query = `
		*[_type == 'post']{
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

	const posts = await client.fetch(query);

	return {
		props: {
			posts
		}
	}
}

export default Home;
