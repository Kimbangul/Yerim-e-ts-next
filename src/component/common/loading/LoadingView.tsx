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

export const FullScreenLoading = () => {
  return (
    <Loading.Wrap>
      <LoadingView width="100%" height="100%" />
    </Loading.Wrap>
  );
};

export default LoadingView;
