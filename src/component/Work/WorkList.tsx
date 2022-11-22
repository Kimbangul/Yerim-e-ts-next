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
import { MaxWidthContainer } from 'styles/Common';
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
    swiper.navigation.update();
    return;
  };

  // PARAM ref
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const swiperRef = useRef<null | SwiperCore>(null);

  // PARAM swiper option
  const swiperOption: SwiperProps = {
    onSwiper: onChangeIndex,
    onRealIndexChange: onChangeIndex,
    onBeforeInit: (swiper: SwiperCore) => {
      swiperRef.current = swiper;
      return;
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    pagination: { clickable: true },
    speed: 800,
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

  // FUNCTION swiper navigation 클릭 시
  const onClickNavigation = (direction: string) => {
    switch (direction) {
      case 'prev':
        swiperRef.current?.slidePrev();
        return;
      case 'next':
        swiperRef.current?.slideNext();
        return;
    }
    return;
  };

  return (
    <List.Container className='Work__list-container'>
      <Chevron
        className='Work__list__button-prev'
        direction='prev'
        onClick={onClickNavigation.bind(this, 'prev')}
      />
      <Swiper {...swiperOption}>
        {workList.map((el) => {
          return (
            <SwiperSlide key={el.title}>
              <WorkListItem {...el} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Chevron
        className='Work__list__button-next'
        direction='next'
        ref={nextRef}
        onClick={onClickNavigation.bind(this, 'next')}
      />
    </List.Container>
  );
};

const List = {
  Container: styled(MaxWidthContainer)`
    margin: 0 auto;
    position: relative;
    .swiper-slide {
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
    .swiper-pagination-bullets {
      bottom: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      position: static;
      margin-top: 1.6rem;
    }
    .swiper-pagination-bullet {
      border-radius: 50%;
      height: 1.2rem;
      width: 1.2rem;
      transform: scale(0.5);
      border: 0;
      background-color: ${(props) => props.theme.color.text_4};
      opacity: 1;
      transition: transform 0.3s, background-color 0.3s;
      margin: 0 0.4rem !important;
      &-active {
        transform: scale(1);
        background-color: ${(props) => props.theme.color.point};
        box-shadow: ${(props) => props.theme.color.point80} 0rem 0rem 0.8rem;
      }
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
