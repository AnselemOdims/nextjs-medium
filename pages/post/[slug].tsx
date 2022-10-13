import Head from 'next/head';
import PortableText from "react-portable-text"

import { querySinglePost, queryAllPosts } from '../../utils/query';
import { client, urlFor } from '../../sanity';
import Header from '../../components/header';

 
const Post = ({ post }:any) => {
  // console.log(post)
  const date = new Date(post.publishedAt).toLocaleDateString();
  return ( 
    <div>
      <Head>
				<title>{post.title}</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
      <Header />
      <main>
        <div className="w-full">
          <img
            src={urlFor(post.mainImage)?.url()}
            className="w-full h-44"
            alt=""
          />
        </div>
        <section className="mx-auto md:max-w-2xl lg:max-w-4xl flex flex-col p-5 lg:px-0 md:px-0">
          <h1 className="text-3xl font-semibold my-1">{post.title}</h1>
          <h2 className="my-4 text-gray-400">{post.description}</h2>
          <div className="flex items-center gap-2">
            <img 
              src={urlFor(post.author.image).url()!} 
              alt=""
              className="w-11 rounded-full border border-green-600"
            />
            <p className="text-sm text-slate-400 font-medium">
              <span>Blog Post by </span>
              <span className="font-light">{post.author.name} </span>
              <span> - Published at {date}</span>
            </p>
          </div>
          <article>
            {/* <p>{post.body}</p> */}
            {/* <PortableText
              content={post.body}
              dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
              projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
              serializers={{

              }}
            /> */}
          </article>
        </section>
      </main>
    </div>
   );
}
 
export default Post;

interface PostType {
  _id: string;
  slug: {
    current: string
  }
}

export const getStaticPaths = async () => {
  const posts = await client.fetch(queryAllPosts);

  const paths = posts.map((post:PostType) => ({
    params: { slug: post.slug.current }
  }));

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps = async ({ params }: any) => {
  
  const post = await client.fetch(querySinglePost(params.slug));                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          

  if(!post) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      post,
    },
    revalidate: 60
  }
}