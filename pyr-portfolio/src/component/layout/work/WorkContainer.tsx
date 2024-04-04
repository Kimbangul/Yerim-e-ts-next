'use client';
import WorkView from '@/component/layout/work/WorkView';
import { workList } from '@/util/data';
import { useState } from 'react';

const WorkContainer = () => {
  // PARAM state
  const [lastPage, setLastPage] = useState(0);
  return <WorkView list={workList} />;
};

export default WorkContainer;
