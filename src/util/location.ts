// FUNCTION 뒤로가기
export const setPageToBack = (e: React.MouseEvent) => {
  e.preventDefault();
  window.history.back();
};
