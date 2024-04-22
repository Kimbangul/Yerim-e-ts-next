'use client';
import { SectionCategoryTitle } from '@/styles/Common';
import TechList from '@/component/layout/tech/TechListView';
import { Tech } from '@/component/layout/tech/TechStyle';
import { TechViewPropType } from '@/component/layout/tech/type';
import AutoHeightImageView from '@/component/common/image/AutoHeightImageView';
import { useScroll, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';

const TechView: React.FC<TechViewPropType> = ({ list }) => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress, scrollY } = useScroll({
    target: containerRef,
    offset: ['-1 -1', '-0.5 -0.5'],
  });
  const opacity = useSpring(scrollYProgress);
  useEffect(() => {
    console.log(scrollYProgress);
  }, [scrollYProgress]);

  return (
    <Tech.Page className="section" ref={containerRef}>
      <SectionCategoryTitle>Tech Stack</SectionCategoryTitle>
      <Tech.Container className="Tech__container">
        <Tech.Img.Container
          className="Tech__img-container"
          style={{ opacity: opacity, transform: `translateY(${scrollY}px)` }}
        >
          <AutoHeightImageView
            src={`${process.env.NEXT_PUBLIC_CDN_LINK}/portfolio/image/tech/tech_design.webp`}
            alt=""
            placeholder="blur"
            sizes="(max-width: 1200px) 85vw, (min-width: 1201px) 1200px"
          />
        </Tech.Img.Container>
        <Tech.Text.Container className="Tech__text-container">
          <Tech.Text.Title className="Tech__title">
            {'Tech Stack'.split('').map((el, idx) => (
              <Tech.Text.Word key={el + idx} className="Tech__title-word">
                {el}
              </Tech.Text.Word>
            ))}
            {/* Tech Stack */}
          </Tech.Text.Title>
        </Tech.Text.Container>

        <Tech.List.Container className="Tech__tech-list-container">
          <TechList techName={list.develop} />
          <TechList techName={list.design} />
        </Tech.List.Container>
      </Tech.Container>
    </Tech.Page>
  );
};

export default TechView;
