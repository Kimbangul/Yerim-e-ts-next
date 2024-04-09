import { SectionCategoryTitle } from '@/styles/Common';
import Post from '@/component/layout/post/PostStyle';
import { PostViewPropType } from '@/component/layout/post/type';
import PostItem from '@/component/layout/post/PostItem';
import PostSkeleton from '@/component/layout/post/PostSkeleton';
import Loading from '@/component/common/loading/LoadingView';

const PostView: React.FC<PostViewPropType> = ({ list, isLoading }) => {
  return (
    <Post.Page className="section">
      <SectionCategoryTitle>Posts</SectionCategoryTitle>
      <Post.Container className="PostsView__container">
        <Post.Title className="PostsView__title">
          {'Recent Posts'.split('').map((str, idx) => (
            <Post.Word className="PostsView__title-word" key={str + idx}>
              {str}
            </Post.Word>
          ))}
        </Post.Title>
        <Post.List className="PostsView__list">
          {isLoading &&
            Array(3)
              .fill('')
              .map((el, idx) => <PostSkeleton id={idx} />)}
          {list &&
            list.map((el, idx) => {
              return <PostItem key={`post${idx}`} {...el} />;
            })}
        </Post.List>
      </Post.Container>
    </Post.Page>
  );
};

export default PostView;
