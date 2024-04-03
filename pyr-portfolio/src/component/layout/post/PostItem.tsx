import Tag from '@/component/common/tag/Tag';
import { PostItem as Post } from '@/component/layout/post/PostStyle';
import { PostItemPropType } from '@/component/layout/post/type';
import { getTimeForDay } from '@/util/time';

const PostItem: React.FC<PostItemPropType> = ({ tags, title, url_slug, short_description, released_at }) => {
  return (
    <Post.Item className="Post">
      <a target="_blank" href={`${'https://velog.io/@kimbangul/' + url_slug}` || '#'}>
        <Post.Title.Container className="Post__title-container">
          <Post.Title.Text className="Post__title">{title}</Post.Title.Text>
          <Post.Title.Date className="Post__date">{getTimeForDay(released_at)}</Post.Title.Date>
        </Post.Title.Container>
        <Post.Context className="Post__context">{short_description}</Post.Context>
        {tags && (
          <Post.Tag className="Post__tag">
            {tags.map((el: string, idx: number) => {
              return <Tag key={`tag${idx}`}>{el}</Tag>;
            })}
          </Post.Tag>
        )}
        <Post.Title.Date className="Post__date">{getTimeForDay(released_at)}</Post.Title.Date>
      </a>
    </Post.Item>
  );
};

export default PostItem;
