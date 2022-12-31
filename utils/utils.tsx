import React, { useState, useEffect, ReactNode } from 'react';
import { AxiosResponse } from 'axios';

const onClickLinkBtn = (link: string, option?: string) => {
  if (option) {
    window.open(link, option);
  } else {
    window.open(link);
  }
  return;
};

const useAPIcall = (
  callable: any,
  url: string,
  params?: { [key: string]: any },
) => {
  const [state, setState] = useState('idle');
  const [data, setData] = useState(null);

  useEffect(() => {
    callable(url, params)
      .then((response: AxiosResponse) => {
        console.log(response);
        if (response.status === 200) {
          setData(response.data);
          setState('fullfilled');
        } else {
          setState('rejected');
        }
      })
      .catch(() => {
        setState('rejected');
      });
  }, [url, params]);

  const LoadingPage: React.FC = () => {
    return <div>Loading</div>;
  };

  return { state, data, setData, LoadingPage };
};

export { onClickLinkBtn, useAPIcall };
