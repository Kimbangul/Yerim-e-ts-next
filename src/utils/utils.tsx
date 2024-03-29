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

  const LoadingPage: React.FC = () => {
    return <div>Loading</div>;
  };


export { onClickLinkBtn };
