import styled from 'styled-components';

import { onClickLinkBtn } from 'utils/utils';
import { blurDataUrl } from 'src/data/data';
import AutoHeightImageView from 'src/component/common/AutoHeightImageView';
import { Button } from 'styles/Common';
import Tag from 'src/component/common/Tag';

type WorkListItemType = {
  thumb: string;
  title: string;
  desc: string;
  category: string;
  tag: string[];
  link?: string;
  github?: string;
};

const WorkListItem: React.FC<WorkListItemType> = (props) => {
  return (
    <Item.Container className='WorkListItem__container'>
      <Item.Thumb>
        <AutoHeightImageView
          src={props.thumb}
          alt={props.title}
          placeholder='blur'
          blurDataURL={blurDataUrl}
        />
      </Item.Thumb>
      <Item.Desc.Container className='WorkListItem__desc-container'>
        <Item.Desc.Info>
          <Item.Desc.Title className='WorkListItem__title'>
            {props.title}
          </Item.Desc.Title>
          <Item.Desc.Category className='WorkListItem__category'>
            {props.category}
          </Item.Desc.Category>
          <Item.Desc.TagList className='WorkListItem__tag-list'>
            {props.tag.map((el: string) => {
              return (
                <Tag className='WorkListItem__tag' key={`tag${el}`}>
                  {el}
                </Tag>
              );
            })}
          </Item.Desc.TagList>
          <Item.Desc.Desc className='WorkListItem__desc'>
            {props.desc}
          </Item.Desc.Desc>
        </Item.Desc.Info>
        <Item.Button.Container className='WorkListItem__button-container'>
          {props.github ? (
            <Button onClick={onClickLinkBtn.bind(this, props.github, '_blank')}>
              Github 바로가기
            </Button>
          ) : null}
          {props.link ? (
            <Button onClick={onClickLinkBtn.bind(this, props.link, '_blank')}>
              사이트 바로가기
            </Button>
          ) : null}
        </Item.Button.Container>
      </Item.Desc.Container>
    </Item.Container>
  );
};

const Item = {
  Container: styled.div`
    display: flex;
    align-items: flex-start;
    overflow: hidden;
    gap: 5.6rem;
    span {
      border-radius: 0.8rem;
      overflow: hidden;
    }
  `,
  Thumb: styled.div`
    width: 50%;
    flex-shrink: 0;
  `,
  Desc: {
    Container: styled.div`
      display: flex;
      flex-direction: column;
      align-self: stretch;
      justify-content: space-between;
    `,
    Info: styled.div``,
    Title: styled.h4`
      font-size: ${({ theme }) => theme.fontSize.head.rg};
      font-weight: 700;
      color: ${({ theme }) => theme.color.f_headColor};
    `,
    Category: styled.div`
      font-size: ${({ theme }) => theme.fontSize.body.lg};
      color: ${({ theme }) => theme.color.text_2};
      margin-top: 0.8rem;
    `,
    TagList: styled.ul`
      display: flex;
      margin-top: 2.4rem;
      flex-wrap: wrap;
      gap: 0.8rem;
    `,
    Desc: styled.p`
      margin-top: 2.4rem;
      font-size: ${({ theme }) => theme.fontSize.body.rg};
      color: ${({ theme }) => theme.color.text_4};
      line-height: 1.8;
    `,
  },
  Button: {
    Container: styled.div`
      display: flex;
      margin-top: 2.4rem;
      gap: 1.6rem;
    `,
  },
};

export default WorkListItem;
