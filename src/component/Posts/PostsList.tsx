import Link from 'next/link';
import Tag from 'src/component/common/Tag';

const PostList: React.FC<PostListPropsType> = (props) => {
  const tagList = JSON.parse(props.tags);

  return (
    <li className='Post'>
      <Link href={props.href || '#'}>
        <a>
          <div className='Post__title-container'>
            <h3 className='Post__title'>{props.headline}</h3>
            <div className='Post__date'>{props.date}</div>
          </div>
          <p className='Post__context'>{props.context}</p>
          {tagList.length > 0 &&
            tagList.map((el: string, idx: number) => {
              return <Tag key={`tag${idx}`}>{el}</Tag>;
            })}
        </a>
      </Link>
    </li>
  );
};

export type PostListPropsType = {
  headline?: string;
  date?: string;
  href: string;
  tags: string;
  context?: string;
  [key: string]: any;
};

export default PostList;
