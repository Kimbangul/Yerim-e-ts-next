'use client';
import PostView from '@/component/layout/post/PostView';
import Loading from '@/component/common/loading/LoadingView';
import usePostQuery from '@/query/usePostQuery';

const PostContainer = () => {
  // return <Loading />;

  // return <PostView list={[]} isLoading={true} />;
  const postquery = usePostQuery('kimbangul', 3);

  if (postquery.isLoading || postquery.isIdle) {
    // TODO 로딩화면 추가
    return <PostView list={[]} isLoading={true} />;
  }

  return <PostView list={postquery.data.posts} />;
};

export default PostContainer;
