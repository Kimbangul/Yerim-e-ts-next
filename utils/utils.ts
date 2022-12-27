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

const useAPIcall = (callable:any, url: string, params: {[key:string]:any}) => {
  const [state, setState] = useState('idle');
  const [data, setData] = useState(null);
  console.log(callable, url, params);

  useEffect(() => {
    callable(url, params).then((response : AxiosResponse) => {
      console.log(response);
      if (response.data.status === "SUCCESS") {
        setData(data);
        setState('fullfilled');

      } else {
        setState("rejected");

      }
    }).catch(() => {
      setState("rejected");
    })
  }, [url, params]);


  const LoadingPage = () => {
    return;
  }

  return {   state, data, setData, LoadingPage  }
}


export { onClickLinkBtn };
