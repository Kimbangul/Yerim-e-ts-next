'use client';
import { useEffect, useMemo, useState } from 'react';
import WorkView from '@/component/layout/work/WorkView';
import { workList } from '@/util/data';
import { WorkType } from '@/util/type';
import { GetListItemType } from '@/component/layout/work/type';

// FUNCTION 리스트 가져오기
const getListItem: GetListItemType = (lastPage: number, list: WorkType[]) => {
  const newList = workList.slice(list.length, lastPage);
  return [...list, ...newList];
};

const WorkContainer = () => {
  // PARAM state
  const [lastItem, setLastItem] = useState(6);
  const [list, setList] = useState<WorkType[]>(getListItem(lastItem, []));

  // PARAM 불러온 페이지의 최대 갯수가 데이터의 총합보다 같거나 많은 경우, 더보기 버튼을 숨김
  const isAbleLoad = useMemo(() => (lastItem >= workList.length ? false : true), [lastItem, workList.length]);

  // FUNCTION lastItem이 바뀌면 리스트 가져오기 실행
  useEffect(() => {
    setList(prev => getListItem(lastItem, prev));
  }, [lastItem]);

  // FUNCTION 더보기 버튼 클릭 시 실행
  const onClickLoadBtn = () => {
    setLastItem(prev => prev + 6);
  };

  return <WorkView list={list} onClickLoadBtn={onClickLoadBtn} isAbleLoad={isAbleLoad} />;
};

export default WorkContainer;
