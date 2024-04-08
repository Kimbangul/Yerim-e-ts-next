import Image, { ImageProps } from 'next/image';
// import styled from 'styled-components';
import getBase64 from '@/util/getBase64';
import AutoHeightImage from '@/component/common/image/autoheight.module.css';

import { blurDataUrl } from '@/util/data';

const WithPlaceHolder = async ({ ...props }: WithPlaceHolderPropType) => {
  const { base64, img } = await getBase64(props.src);
  console.log(base64, img);

  return (
    <div className={AutoHeightImage.container}>
      <Image
        {...props}
        // fill={true}
        width={img.width}
        height={img.height}
        className={AutoHeightImage.autoImage}
        alt={props.alt}
        placeholder={props.placeholder || 'blur'}
        blurDataURL={blurDataUrl}
      />
    </div>
  );
};

export interface WithPlaceHolderPropType extends ImageProps {
  src: string;
}

export default WithPlaceHolder;
