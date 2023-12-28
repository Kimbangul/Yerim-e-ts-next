import axios from 'axios';
import { NextPage } from 'next';
import { useEffect, useMemo } from 'react';
import useApiCall from 'utils/useApiCall';
import PostList from 'src/component/Posts/PostsList';

// COMPONENT main component
const Home: NextPage = () => {
  const postsCall = useApiCall<any>(() =>
  axios.get(`/api/crawler`)
  );

  const isLoad = useMemo(()=>{
    return postsCall.state;
  }, [postsCall.state]);

  useEffect(()=>{
    console.log(postsCall);
  }, [postsCall]);

  return (
    <>
    <h1>test page</h1>
    <PostList />
    </>
  );
};

export default Home;