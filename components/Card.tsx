import Image from 'next/image';
import React from 'react'
import { urlFor } from '../sanity';

interface CardProps {
  postImg: string;
  author: {
    name: string;
    image: {}
  }
  title: string;
  slug: string;
}

const Card = ({ postImg, author, title, slug }: CardProps) => {
  return ( 
    <div className="block p-2 shadow-xl rounded-md" style={{ background: "#fff"}}>
      <Image 
       src={postImg}
       width="100%"
       height="90px"
        layout="responsive"
      />
      <div>
        <p className="font-bold text-2xl">{title}</p>
        <hr className="my-1"/>
        <div className="flex justify-between items-center font-bold">
          <p className="text-light text-sm">{author.name}</p>
          <img
          src={urlFor(author.image).url()!}
          className="w-9 rounded-full border-2 border-green-600"
          />  
        </div>
      </div>
    </div>
   );
}
 
export default Card;