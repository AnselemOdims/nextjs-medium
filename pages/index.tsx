import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

import Banner from '../components/banner';
import Header from '../components/header';
import { client } from '../sanity';
import { Props } from '../typings';


const Home = ({ posts }: Props) => {
	console.log(posts)
	return (
		<div className=''>
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Header />
			{/* <main > */}
				<Banner />
			{/* </main> */}
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
			mainImage -> {
				asset
			},
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
