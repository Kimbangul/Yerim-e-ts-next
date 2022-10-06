import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper';

import { Container, SectionCategoryTitle } from 'styles/Common';

import 'swiper/css';
import 'swiper/css/effect-coverflow';

const Work: React.FC = () => {
  return (
    <WorkContainer className='section'>
      <SectionCategoryTitle>Work</SectionCategoryTitle>
      <div className='Work__container'>
        <div className='Work__text-container'>
          <h3 className='Work__title'>Work</h3>
          <p className='Work__desc'>작업물들</p>
        </div>
        <div className='Work__list-container'>
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
        </div>
      </div>
    </WorkContainer>
  );
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

export default Work;
