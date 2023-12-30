import axios from 'axios';
import { NextPage } from 'next';
import { useEffect, useMemo } from 'react';
import useApiCall from 'utils/useApiCall';
import PostView from 'src/component/Posts/PostsView';

// COMPONENT main component
const Home: NextPage = () => {
  return (
    <>
    <h1>test page</h1>
    <PostView />
    </>
  );
};

export default Home;