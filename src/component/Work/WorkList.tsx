import React, { SetStateAction, Dispatch, useRef } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';

import { workList } from 'src/data/data';
import WorkListItem from 'src/component/Work/WorkListItem';

import 'swiper/css';
import 'swiper/css/effect-coverflow';

// PARAM type
type WorkListType = {
  setCurrentIdx: (idx: number) => void;
};
type SwiperBaseType = {
  [key: string]: any;
  activeIndex: number;
};

const WorkList: React.FC<WorkListType> = (props) => {
  // FUNCTION set active index
  const onChangeIndex = ({ activeIndex, ...swiper }: SwiperBaseType) => {
    props.setCurrentIdx(swiper.realIndex);
    return;
  };

  return (
    <List.Container className='Work__list-container'>
      <Swiper
        onSwiper={onChangeIndex}
        onRealIndexChange={onChangeIndex}
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
              <WorkListItem
                thumb={el.thumb}
                title={el.title}
                desc={el.desc}
                tag={el.tag}
                category={el.category}
              />
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
      .WorkListItem__text-container {
        opacity: 0;
        transition: opacity 0.3s;
      }
    }
    .swiper-slide-active {
      transform: scale(1);
      filter: saturate(1);
      .WorkListItem__text-container {
        opacity: 1;
      }
    }
  `,
};

export default WorkList;
