import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper';

import { Container, SectionCategoryTitle } from 'styles/Common';

import 'swiper/css';
import 'swiper/css/effect-coverflow';

const WorkView: React.FC = () => {
  return (
    <Work.Page className='section'>
      <SectionCategoryTitle>Work</SectionCategoryTitle>
      <Work.Container className='Work__container'>
        <Work.Text.Container className='Work__text-container'>
          <Work.Text.Title className='Work__title'>Work</Work.Text.Title>
          <Work.Text.Desc className='Work__desc'>작업물들</Work.Text.Desc>
        </Work.Text.Container>
        <Work.List.Container className='Work__list-container'>
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={20}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className='mySwiper'
          >
            <SwiperSlide>1</SwiperSlide>
            <SwiperSlide>2</SwiperSlide>
            <SwiperSlide>3</SwiperSlide>
          </Swiper>
        </Work.List.Container>
      </Work.Container>
    </Work.Page>
  );
};

// COMPONENT style
const Work = {
  Page: styled(Container)``,
  Container: styled.div``,
  Text: {
    Container: styled.div`
      color: ${({ theme }) => theme.color.f_headColor};
    `,
    Title: styled.h3`
      font-size: ${({ theme }) => theme.fontSize.head.xl};
      color: ${({ theme }) => theme.color.pointPink};
    `,
    Desc: styled.p`
      font-size: ${({ theme }) => theme.fontSize.body.md};
      line-height: 1.5;
      font-weight: 300;
      color: ${({ theme }) => theme.color.text};
      margin-top: 2.4rem;
    `,
  },
  List: {
    Container: styled.div``,
  },
};

// COMPONENT style
const WorkContainer = styled(Container)`
  /* background: ${({ theme }) => theme.color.mainColor}; */
  .Work {
    &__container {
    }
    &__text-container {
      color: ${({ theme }) => theme.color.f_headColor};
    }
    &__title {
      font-size: ${({ theme }) => theme.fontSize.head.xl};
      color: ${({ theme }) => theme.color.pointPink};
      &--light {
        font-weight: 300;
      }
    }
    &__desc {
      font-size: ${({ theme }) => theme.fontSize.body.md};
      line-height: 1.5;
      font-weight: 300;
      color: ${({ theme }) => theme.color.f_bodyColor};
      margin-top: 2.4rem;
      &--point {
        color: ${({ theme }) => theme.color.pointPink};
      }
    }
  }
`;

export default WorkView;
