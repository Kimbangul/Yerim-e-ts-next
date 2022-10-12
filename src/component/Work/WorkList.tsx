import { useRef } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Autoplay,
  Pagination,
  Navigation,
  EffectFade,
} from 'swiper';

import { workList } from 'src/data/data';
import Chevron from 'src/component/common/Chevron';
import WorkListItem from 'src/component/Work/WorkListItem';

import 'swiper/css';
import 'swiper/css/effect-fade';
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

  // FUNCTION swiper before init
  const onBeforeSwiperInit = (swiper: SwiperCore) => {
    if (
      typeof swiper.params.navigation !== 'boolean' &&
      swiper.params.navigation
    ) {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
    }
    console.log(prevRef.current, nextRef.current);
    swiper.navigation.update();
    return;
  };

  // PARAM ref
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  // PARAM swiper option
  const swiperOption: SwiperProps = {
    onSwiper: onChangeIndex,
    onRealIndexChange: onChangeIndex,
    onBeforeInit: (swiper: SwiperCore) => {
      onBeforeSwiperInit(swiper);
      return;
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    pagination: { type: 'progressbar' },
    navigation: {
      prevEl: prevRef.current,
      nextEl: nextRef.current,
    },
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
      <Chevron
        className='Work__list__button-prev'
        direction='prev'
        ref={prevRef}
      />
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
      <Chevron
        className='Work__list__button-next'
        direction='next'
        ref={nextRef}
      />
    </List.Container>
  );
};

const List = {
  Container: styled.div`
    width: ${(props) => props.theme.maxWidth};
    margin: 0 auto;
    position: relative;
    .swiper-slide {
      /* transform: scale(0.85);
      transition: transform 0.3s, filter 0.3s;
      filter: saturate(0) brightness(0.4);
      .WorkListItem__text-container {
        opacity: 0;
        transition: opacity 0.3s;
      } */
      margin-bottom: 4.8rem;
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
    .swiper-button-prev {
    }
    .swiper-pagination-progressbar-fill {
      background: ${(props) => props.theme.color.text};
      border-radius: 10rem;
    }
    .Work__list__button {
      @keyframes prevBtnAni {
        from {
          right: calc(100% + 2.4rem);
          opacity: 1;
        }
        to {
          right: calc(100% + 4rem);
          opacity: 0.4;
        }
      }
      @keyframes nextBtnAni {
        from {
          left: calc(100% + 2.4rem);
          opacity: 1;
        }
        to {
          left: calc(100% + 4rem);
          opacity: 0.4;
        }
      }
      &-prev,
      &-next {
        position: absolute;
        top: 50%;
        transform: translateY(calc(-50% - 4.8rem));
      }
      &-prev {
        right: calc(100% + 2.4rem);
        animation: prevBtnAni 1s ease-in-out 0s infinite alternate both;
      }
      &-next {
        left: calc(100% + 2.4rem);
        animation: nextBtnAni 1s ease-in-out 0s infinite alternate both;
      }
    }
  `,
};

export default WorkList;
