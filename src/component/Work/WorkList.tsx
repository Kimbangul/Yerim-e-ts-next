import React, { SetStateAction, Dispatch, useRef } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper';

import { workList } from 'src/data/data';
import WorkListItem from 'src/component/Work/WorkListItem';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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

  // PARAM swiper option
  const swiperOption: SwiperProps = {
    onSwiper: onChangeIndex,
    onRealIndexChange: onChangeIndex,
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    pagination: { type: 'progressbar' },
    navigation: true,
    speed: 1500,
    grabCursor: true,
    spaceBetween: 24,
    centeredSlides: true,
    slidesPerView: 1,
    slidesPerGroup: 1,
    modules: [Autoplay, Pagination, Navigation, EffectFade],
    loop: true,
    autoplay: {
      delay: 3000,
      pauseOnMouseEnter: true,
      disableOnInteraction: true,
    },
    className: 'mySwiper',
  };

  return (
    <List.Container className='Work__list-container'>
      <Swiper {...swiperOption}>
        {workList.map((el) => {
          return (
            <SwiperSlide key={el.title}>
              <WorkListItem
                thumb={el.thumb}
                title={el.title}
                desc={el.desc}
                tag={el.tag}
                category={el.category}
                github={el.github && el.github}
                link={el.link && el.link}
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
    width: ${(props) => props.theme.maxWidth};
    margin: 0 auto;
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
    .swiper-horizontal > .swiper-pagination-progressbar {
      top: unset;
      bottom: 0;
      border-radius: 10rem;
      overflow: hidden;
    }
    .swiper-pagination-progressbar {
    }
    .swiper-pagination-progressbar-fill {
      background: ${(props) => props.theme.color.text};
      border-radius: 10rem;
    }
  `,
};

export default WorkList;
