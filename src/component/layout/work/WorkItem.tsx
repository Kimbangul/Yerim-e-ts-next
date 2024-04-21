import { WorkItemType } from '@/component/layout/work/type';
import { Item } from '@/component/layout/work/WorkStyle';
import Tag from '@/component/common/tag/Tag';

const WorkItem: React.FC<WorkItemType> = ({ title, category, tag, id, imgObj, variants, viewRef, delay }) => {
  return (
    <Item.Container
      className="WorkListItem__container"
      // variants={variants}
      // initial="start" animate="end"
      // viewport={{ root: viewRef, once: false }}
      initial={{ scale: 0.9, opacity: 0 }}
      whileInView={{
        scale: 1,
        opacity: 1,
        transition: { type: 'spring', stiffness: 40, damping: 10 },
      }}
      whileHover={{
        scale: 0.9,
        transition: { type: 'spring', stiffness: 400, damping: 10 },
      }}
    >
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
