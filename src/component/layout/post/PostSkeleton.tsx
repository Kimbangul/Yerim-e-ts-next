import { PostItem as Post, PostSkeleton as Skeleton } from '@/component/layout/post/PostStyle';
import { PostSkeletonPropType } from '@/component/layout/post/type';

const PostSkeleton: React.FC<PostSkeletonPropType> = ({ id }) => {
  return (
    <Post.Item className="Post">
      <Post.Title.Container className="Post__title-container">
        <Skeleton.Text />
        <Skeleton.Date className="Post__date" />
      </Post.Title.Container>
      <Skeleton.Context />
      <Post.Tag className="Post__tag">
        {Array(3)
          .fill('')
          .map((el, idx) => (
            <Skeleton.TagItem key={`Tag${id}${idx}`} />
          ))}
      </Post.Tag>
      <Skeleton.Date className="Post__date" />
    </Post.Item>
  );
};

export default PostSkeleton;
