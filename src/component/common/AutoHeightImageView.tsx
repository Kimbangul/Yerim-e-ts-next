import Image, { ImageProps } from 'next/image';
import equal from 'fast-deep-equal';
import styled from 'styled-components';

const AutoHeightImageView = ({ ...props }: ImageProps): React.ReactElement => {
  return (
    <AutoHeightImage>
      <Image layout='fill' className='autoImage' {...props} alt={props.alt} />
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
