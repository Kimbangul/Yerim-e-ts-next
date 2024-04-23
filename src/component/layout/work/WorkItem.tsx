import { WorkItemType } from '@/component/layout/work/type';
import { Item } from '@/component/layout/work/WorkStyle';
import Tag from '@/component/common/tag/Tag';
import { animateSpringButton, animateSpringItem } from '@/styles/motion';
import { useState, useEffect } from 'react';

const WorkItem: React.FC<WorkItemType> = ({ title, category, tag, id, imgObj }) => {
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    console.log(isHover);
  }, [isHover]);

  return (
    <Item.Container
      className="WorkListItem__container"
      variants={animateSpringItem}
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
    >
      <a href={`/work/${id}`}>
        <Item.Thumb
          className="WorkListItem__thumb"
          // layout
          transition={{ duration: 0.3 }}
          variants={animateSpringButton}
          initial="initial"
          animate={isHover ? 'hover' : 'initial'}
          whileTap="hover"
        >
          {imgObj}
          {/* <AutoHeightImageView src={thumb} alt={title} placeholder="blur" blurDataURL={blurDataUrl} /> */}
        </Item.Thumb>
        <Item.Desc.Container className="WorkListItem__desc-container">
          <Item.Desc.Info>
            <Item.Desc.Title className="WorkListItem__title">{title}</Item.Desc.Title>
            <Item.Desc.Category className="WorkListItem__category">{category}</Item.Desc.Category>
            <Item.Desc.TagList className="WorkListItem__tag-list">
              {tag.map((el: string) => {
                return (
                  <Tag className="WorkListItem__tag" key={`tag${el}`}>
                    {el}
                  </Tag>
                );
              })}
            </Item.Desc.TagList>
          </Item.Desc.Info>
        </Item.Desc.Container>
      </a>
    </Item.Container>
  );
};

export default WorkItem;
