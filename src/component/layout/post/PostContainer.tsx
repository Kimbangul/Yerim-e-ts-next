'use client';
import PostView from '@/component/layout/post/PostView';
import usePostQuery from '@/query/usePostQuery';

const PostContainer = () => {
  const postquery = usePostQuery('kimbangul', 3);

  return <PostView list={postquery.data?.posts || []} isLoading={postquery.isLoading || postquery.isIdle} />;
};

export default PostContainer;
