import Image, { ImageProps } from 'next/image';
import getBase64 from '@/util/getBase64';
import AutoHeightImage from '@/component/common/image/autoheight.module.css';

const WithPlaceHolder = async ({ ...props }: WithPlaceHolderPropType) => {
  const { base64, img } = await getBase64(props.src);

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
        blurDataURL={base64}
        loading={props.loading || 'lazy'}
      />
    </div>
  );
};

export interface WithPlaceHolderPropType extends ImageProps {
  src: string;
}

export default WithPlaceHolder;
