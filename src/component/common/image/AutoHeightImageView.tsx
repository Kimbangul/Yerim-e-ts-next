// 'use client';
import Image, { ImageProps } from 'next/image';
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

export default AutoHeightImageView;
