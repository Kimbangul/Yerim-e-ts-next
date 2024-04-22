import { WorkItemType } from '@/component/layout/work/type';
import { Item } from '@/component/layout/work/WorkStyle';
import Tag from '@/component/common/tag/Tag';

const WorkItem: React.FC<WorkItemType> = ({ title, category, tag, id, imgObj }) => {
  const animateItem = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: 'spring', stiffness: 40, damping: 10 },
    },
  };

  return (
    <Item.Container className="WorkListItem__container" variants={animateItem}>
      <a href={`/work/${id}`}>
        <Item.Thumb>
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
