'use client';
import { SectionCategoryTitle } from '@/styles/Common';
import TechList from '@/component/layout/tech/TechListView';
import { Tech } from '@/component/layout/tech/TechStyle';
import TechTickerItem from '@/component/layout/tech/TechTickerItem';
import { TechViewPropType } from '@/component/layout/tech/type';
import Ticker from '@/component/ticker/Ticker';

const TechView: React.FC<TechViewPropType> = ({ list }) => {

  return (
    <Tech.Page className="section">
      <SectionCategoryTitle>Tech Stack</SectionCategoryTitle>
      <Ticker 
            duration={60}>
            <TechTickerItem />
          </Ticker>
      <Tech.Container className="Tech__container">
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
          <TechList techName={list.coWork} />
        </Tech.List.Container>
      </Tech.Container>
    </Tech.Page>
  );
};

export default TechView;
