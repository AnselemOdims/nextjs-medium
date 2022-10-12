import Image from 'next/image';

interface CardProps {
  postImg: string;
  author: string;
  title: string;
}

const Card = ({ postImg, author, title }: CardProps) => {
  return ( 
    <div>
      <Image 
       src={postImg}
       width="100%"
       height="100%"
      />
      <div>
        <p>{title}</p>
        <p>{author}</p>
      </div>
    </div>
   );
}
 
export default Card;