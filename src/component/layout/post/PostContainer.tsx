'use client';
import PostView from '@/component/layout/post/PostView';
import useIntersect from '@/hook/useIntersect';
import usePostQuery from '@/query/usePostQuery';
import { useEffect } from 'react';

const PostContainer = () => {
  const { isLoading, isIdle, data, refetch } = usePostQuery('kimbangul', 3);
  const [target, isView] = useIntersect<HTMLDivElement>(undefined, undefined, true);

  useEffect(() => {
    if (isView) {
      refetch();
    }
  }, [isView, refetch]);

  return <PostView target={target} list={data?.posts || []} isLoading={isLoading || isIdle} />;
};

export default PostContainer;
