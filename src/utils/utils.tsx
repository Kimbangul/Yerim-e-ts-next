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

const setFocusToElement = (selector:string) => {
  // console.log(window.history);
  // console.log(selector);
  // const element = document.querySelector(selector);
  // console.log(element);
  // if(element instanceof HTMLElement){
  //   console.log('is element');
  //   console.log(element);
  // }
}


export { onClickLinkBtn, setFocusToElement };
