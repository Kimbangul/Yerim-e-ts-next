'use client';
import PostView from '@/component/layout/post/PostView';
import usePostQuery from '@/query/usePostQuery';

const PostContainer = () => {
  const postquery = usePostQuery('kimbangul', 3);
  console.log(postquery.data);
  return <PostView />;
};

export default PostContainer;
