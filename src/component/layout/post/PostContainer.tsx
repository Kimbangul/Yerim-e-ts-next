'use client';
import PostView from '@/component/layout/post/PostView';
import useIntersect from '@/hook/useIntersect';
import usePostQuery from '@/query/usePostQuery';
import { useEffect } from 'react';

const PostContainer = () => {
  const [target, isView] = useIntersect<HTMLDivElement>(undefined, undefined, true);
  const postquery = usePostQuery('kimbangul', 3);

  useEffect(() => {
    if (isView) {
      postquery.refetch();
    }
  }, [isView]);

  return (
    <PostView target={target} list={postquery.data?.posts || []} isLoading={postquery.isLoading || postquery.isIdle} />
  );
};

export default PostContainer;
