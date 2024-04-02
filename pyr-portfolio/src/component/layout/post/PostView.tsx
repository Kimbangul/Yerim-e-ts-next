import { SectionCategoryTitle } from '@/styles/Common';
import Post from '@/component/layout/post/PostStyle';

const PostView = () => {
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
        {/* {postsCall.data.length > 0 && (
          <Post.List className="PostsView__list">
            {postsCall.data.map((el, idx) => {
              return <PostList key={`post${idx}`} {...el} />;
            })}
          </Post.List>
        )} */}
      </Post.Container>
    </Post.Page>
  );
};

export default PostView;
