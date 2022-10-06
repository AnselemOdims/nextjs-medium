export interface PostInterface {
  _id: string;
  title: string;
  slug: {
    current: string
  };
  author: {
    name: string;
    image: {
      asset: {
        _ref: string
      }
    };
    bio: {
      children: {
        text: string
      }[]
    }[];
    mainImage: {
      asset: {
        _ref: string
      }
    };
    description: string;
    publishedAt: datetime;
    body: string
  }
}

export interface Props {
  posts: PostInterface[];
}