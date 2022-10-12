const onClickLinkBtn = (link: string, option?: string) => {
  if (option) {
    window.open(link, option);
  } else {
    window.open(link);
  }
  return;
};

export { onClickLinkBtn };
