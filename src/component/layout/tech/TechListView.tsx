'use client';
import Tag from '@/component/common/tag/Tag';
import { TechList } from '@/component/layout/tech/TechStyle';
import { TechListPropType } from '@/component/layout/tech/type';

const TechListView: React.FC<TechListPropType> = ({ techName }) => {
  return (
    <TechList.Category className="Tech__tech-list-category">
      <TechList.Title className="Tech__tech-list-category-name">{techName.title}</TechList.Title>
      <TechList.Contents.Container className="Tech__tech-list-contents">
        <TechList.Contents.List
          className="Tech__tech-list"
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: {
              when: 'beforeChildren',
              delayChildren: 0.5,
              staggerChildren: 0.5,
            },
          }}
        >
          {techName.content.map((el: string, idx: number) => {
            return (
              <TechList.Item
                className="Tech__tech-list-item"
                key={`desc${idx}`}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                {el}
              </TechList.Item>
            );
          })}
        </TechList.Contents.List>
        <TechList.Tag.List className="Tech__tech-tag-list">
          {techName.tag.map((el: string) => {
            return <Tag key={el}>{el}</Tag>;
          })}
        </TechList.Tag.List>
      </TechList.Contents.Container>
    </TechList.Category>
  );
};

export default TechListView;
