'use client';
import PostView from '@/component/layout/post/PostView';
import Loading from '@/component/common/loading/LoadingView';
import usePostQuery from '@/query/usePostQuery';

const PostContainer = () => {
  const postquery = usePostQuery('kimbangul', 3);

  return <PostView list={postquery.data?.posts || []} isLoading={postquery.isLoading || postquery.isIdle} />;

  // if (postquery.isLoading || postquery.isIdle) {
  //   // TODO 로딩화면 추가
  //   return <PostView list={[]} isLoading={true} />;
  // }

  // return <PostView list={postquery.data.posts} />;
};

export default PostContainer;
