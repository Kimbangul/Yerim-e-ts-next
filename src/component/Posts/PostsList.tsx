const PostList: React.FC<PostListPropsType> = (props) => {
  return (
    <li className='Post'>
      <h3 className='Post__title'>{props.headline}</h3>
    </li>
  );
};

type PostListPropsType = {
  headline: string;
  date: string;
  href: string;
  tags: string;
  context: string;
};

export default PostList;
