import { useQuery } from 'react-query';

const usePostQuery = (name: string, limit: number) => {
  const { isLoading, data, error, refetch, isIdle } = useQuery('postList', async () => {
    const param = { name: name, limit: limit };
    const res = await fetch(`/api/post/list`, { method: 'post', body: JSON.stringify(param) });
    console.log(res);
    return await res.json();
  });

  return { isLoading, data, error, refetch, isIdle };
};

export default usePostQuery;
