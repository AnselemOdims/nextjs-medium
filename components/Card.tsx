import Image from 'next/image';
import React from 'react'

interface CardProps {
  postImg: string;
  author: string;
  title: string;
  slug: string;
}

const Card = ({ postImg, author, title, slug }: CardProps) => {
  return ( 
    <div className="block p-2 shadow-xl" style={{ background: "#fff"}}>
      <Image 
       src={postImg}
       width="100%"
       height="90px"
        layout="responsive"
      />
      <div>
        <p className="font-bold text-2xl">{title}</p>
        <hr className="my-1"/>
        <div className="flex justify-between">
          <p className="text-light">{author}</p>
          <p className="flex items-center px-2 text-white text-xs bg-green-600 rounded-full text-center">{slug}</p>
        </div>
      </div>
    </div>
   );
}
 
export default Card;