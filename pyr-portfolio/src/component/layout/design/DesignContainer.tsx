'use client';
import { useState } from 'react';
import DesignView from '@/component/layout/design/DesignView';
import { designList } from '@/util/data';

const DesignContainer = () => {
  // PARAM state
  const [focusItem, setFocusItem] = useState('');

  // FUNCTION 아이템에 hover시 실행
  const onMouseEnterDesignItem = (title: string) => {
    setFocusItem(title);
  };
  const onMouseOutDesginItem = () => {
    setFocusItem('');
  };

  return (
    <DesignView
      list={designList}
      focusItem={focusItem}
      onMouseOutDesginItem={onMouseOutDesginItem}
      onMouseEnterDesignItem={onMouseEnterDesignItem}
    />
  );
};

export default DesignContainer;
