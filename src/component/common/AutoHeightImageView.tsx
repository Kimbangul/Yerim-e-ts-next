import Image, { ImageProps } from 'next/image';
import styled from 'styled-components';

import { blurDataUrl } from 'src/data/data';

const AutoHeightImageView = ({ ...props }: ImageProps): React.ReactElement => {
  return (
    <AutoHeightImage>
      <Image
        {...props}
        layout='fill'
        className='autoImage'
        alt={props.alt}
        placeholder={props.placeholder && 'blur'}
        blurDataURL={blurDataUrl}
      />
    </AutoHeightImage>
  );
};

const AutoHeightImage = styled.div`
  width: 100%;
  position: relative;
  span {
    position: unset !important;
  }
  .autoImage {
    object-fit: contain !important;
    position: relative !important;
    height: auto !important;
  }
`;

export default AutoHeightImageView;
