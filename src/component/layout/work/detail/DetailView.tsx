'use client';
import AutoHeightImageView from '@/component/common/image/AutoHeightImageView';
import Tag from '@/component/common/tag/Tag';
import Detail from '@/component/layout/work/detail/DetailStyle';
import { DetailViewPropType } from '@/component/layout/work/detail/type';
import { animateSpringButton } from '@/styles/motion';
import { setPageToBack } from '@/util/location';

const animateImg = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: -40,
    borderRadius: '2.4rem',
  },
  visible: {
    opacity: 1,
    borderRadius: '1.6rem',
    y: 0,
    transition: { type: 'spring', stiffness: 250, damping: 20, duration: 0.35 },
    scale: 1,
    // transition: { duration: 0.7 },
  },
};

const DetailView: React.FC<DetailViewPropType> = ({ data, imgObj }) => {
  if (data === null) return;

  return (
    <Detail.Container as="article" className="Detail">
      <Detail.Inner>
        <Detail.Title.Container className="Detail__title-container">
          <Detail.Title.TextContainer className="Detail__title__text-container">
            <Detail.Title.Text className="Detail__title">{data?.title}</Detail.Title.Text>
            <Detail.Category className="Detail__category">{data?.category}</Detail.Category>
            <Detail.Tag.List className="Detail__tag-list">
              {data?.tag.map(el => {
                return (
                  <Tag key={el} className="Detail__tag-item">
                    {el}
                  </Tag>
                );
              })}
            </Detail.Tag.List>
            <Detail.Button.Container className="Detail__button-container">
              {data?.link ? (
                <Detail.Button.Button
                  target="_blank"
                  href={data.link}
                  initial={animateSpringButton.initial}
                  whileHover={animateSpringButton.hover}
                  whileTap={animateSpringButton.hover}
                >
                  사이트 바로가기
                </Detail.Button.Button>
              ) : null}
              {data?.github ? (
                <Detail.Button.Button
                  target="_blank"
                  href={data.github}
                  initial={animateSpringButton.initial}
                  whileHover={animateSpringButton.hover}
                  whileTap={animateSpringButton.hover}
                >
                  Github 바로가기
                </Detail.Button.Button>
              ) : null}
            </Detail.Button.Container>
          </Detail.Title.TextContainer>
          <Detail.Image.Container
            className="Detail__image-container"
            variants={animateImg}
            whileInView="visible"
            initial="hidden"
          >
            {imgObj.thumb}
            {/* <AutoHeightImageView src={data?.thumb} alt={data?.title} priority loading="eager" /> */}
          </Detail.Image.Container>
        </Detail.Title.Container>
        <Detail.Desc.Container className="Detail__desc-container">
          <Detail.Desc.Title className="Detail__desc-title">OverView.</Detail.Desc.Title>
          <Detail.Desc.Content className="Detail__desc">{data?.desc}</Detail.Desc.Content>
        </Detail.Desc.Container>
        <Detail.Desc.Container className="Detail__duration-container">
          <Detail.Desc.Title className="Detail__duration-title">Work Info.</Detail.Desc.Title>
          <Detail.Desc.InfoList className="Detail__InfoList">
            <Detail.Desc.Content as="li" className="Detail__InfoList-item">
              <Detail.Desc.Label>제작 기간</Detail.Desc.Label>
              {data?.duration}
            </Detail.Desc.Content>
            <Detail.Desc.Content as="li" className="Detail__InfoList-item">
              <Detail.Desc.Label>제작 영역</Detail.Desc.Label>
              {data?.section}
            </Detail.Desc.Content>
            <Detail.Desc.Content as="li" className="Detail__InfoList-item">
              <Detail.Desc.Label>사용 툴</Detail.Desc.Label>
              {data?.tool}
            </Detail.Desc.Content>
          </Detail.Desc.InfoList>
        </Detail.Desc.Container>
        <Detail.Button.Container className="Detail__button-container">
          <Detail.Button.Button
            onClick={setPageToBack}
            initial={animateSpringButton.initial}
            whileHover={animateSpringButton.hover}
            whileTap={animateSpringButton.hover}
          >
            목록으로
          </Detail.Button.Button>
        </Detail.Button.Container>
      </Detail.Inner>
    </Detail.Container>
  );
};

export default DetailView;
