'use client';
import PostView from '@/component/layout/post/PostView';
import usePostQuery from '@/query/usePostQuery';

const PostContainer = () => {
  const postquery = usePostQuery('kimbangul', 3);

  if (postquery.isLoading || postquery.isIdle) {
    // TODO 로딩화면 추가
    return <PostView list={[]} />;
  }

  return <PostView list={postquery.data.posts} />;
};

export default PostContainer;
