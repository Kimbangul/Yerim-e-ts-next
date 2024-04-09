'use client';
import React from 'react';
import Loading from '@/component/common/loading/LoadingStyle';
import { LoadingPropType } from '@/component/common/loading/LoadingType';

const LoadingView: React.FC<LoadingPropType> = ({ width, height }) => {
  return (
    <Loading.Container $width={width} $height={height} className="Loading">
      <Loading.Dot />
    </Loading.Container>
  );
};

export default LoadingView;
