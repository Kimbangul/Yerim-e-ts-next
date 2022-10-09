import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';

import { workList } from 'src/data/data';
import WorkListItem from 'src/component/Work/WorkListItem';

import 'swiper/css';
import 'swiper/css/effect-coverflow';

const WorkList = () => {
  return (
    <List.Container className='Work__list-container'>
      <Swiper
        effect={'coverflow'}
        pagination={{
          type: 'progressbar',
        }}
        navigation={true}
        speed={1500}
        grabCursor={true}
        spaceBetween={24}
        centeredSlides={true}
        slidesPerView={3}
        slidesPerGroup={1}
        modules={[Autoplay, Pagination, Navigation]}
        loop={true}
        autoplay={{
          delay: 3000,
          pauseOnMouseEnter: true,
          disableOnInteraction: true,
        }}
        className='mySwiper'
      >
        {workList.map((el) => {
          return (
            <SwiperSlide key={el.title}>
              <WorkListItem thumb={el.thumb} title={el.title} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </List.Container>
  );
};

const List = {
  Container: styled.div`
    .swiper-slide {
      transform: scale(0.85);
      transition: transform 0.3s, filter 0.3s;
      filter: saturate(0) brightness(0.4);
    }
    .swiper-slide-active {
      transform: scale(1);
      filter: saturate(1);
    }
  `,
};

export default WorkList;
