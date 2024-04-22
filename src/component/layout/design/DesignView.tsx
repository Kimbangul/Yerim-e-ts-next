'use client';
import { SectionCategoryTitle } from '@/styles/Common';
import Design from '@/component/layout/design/DesignStyle';
import DesignItem from '@/component/layout/design/DesignItem';
import { DesignViewPropType } from '@/component/layout/design/type';
import { animateSpringList } from '@/styles/motion';

const DesignView: React.FC<DesignViewPropType> = ({
  focusItem,
  list,
  onMouseEnterDesignItem,
  onMouseOutDesginItem,
}) => {
  return (
    <Design.Page className="section">
      <SectionCategoryTitle>Design</SectionCategoryTitle>
      <Design.Container className="Design__container">
        <Design.List className="Design__list" variants={animateSpringList} initial="hidden" whileInView="visible">
          {list.map((el, idx) => {
            return (
              <DesignItem
                key={`design${idx}`}
                idx={idx}
                title={el.title}
                thumb={el.thumb}
                detail={el.detail}
                link={el.link}
                onMouseEnter={onMouseEnterDesignItem.bind(this, el.title)}
                onMouseOut={onMouseOutDesginItem}
                focusItem={focusItem}
              />
            );
          })}
        </Design.List>
        <Design.Desc.Text className="Design__desc">
          저의 작업물들을 만나보세요!
          {focusItem !== '' && <Design.Desc.Title>{focusItem}</Design.Desc.Title>}
        </Design.Desc.Text>
      </Design.Container>
    </Design.Page>
  );
};

export default DesignView;
