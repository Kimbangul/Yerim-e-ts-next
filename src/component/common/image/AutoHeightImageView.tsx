// 'use client';
import Image, { ImageProps } from 'next/image';
// import styled from 'styled-components';
import AutoHeightImage from '@/component/common/image/autoheight.module.css';

import { blurDataUrl } from '@/util/data';

const AutoHeightImageView = ({ ...props }: ImageProps): React.ReactElement => {
  return (
    <div className={AutoHeightImage.container}>
      <Image
        {...props}
        fill={true}
        className={AutoHeightImage.autoImage}
        alt={props.alt}
        placeholder={props.placeholder || 'blur'}
        blurDataURL={blurDataUrl}
        loading={props.loading || 'lazy'}
      />
    </div>
  );
};

// const AutoHeightImage = styled.div`
//   width: 100%;
//   position: relative;
//   span {
//     position: unset !important;
//   }
//   .autoImage {
//     object-fit: contain !important;
//     position: relative !important;
//     height: auto !important;
//   }
// `;

export default AutoHeightImageView;
