import Link from 'next/link';
import styled from 'styled-components';

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
        <Item.Button.Container className='WorkListItem__button-container'>
          {props.github ? (
            <Button>
              <Link href={props.github}>
                <a target='_blank' rel='noreferrer'>
                  Github 바로가기
                </a>
              </Link>
            </Button>
          ) : null}
          {props.link ? (
            <Button>
              <Link href={props.link}>
                <a target='_blank' rel='noreferrer'>
                  사이트 바로가기
                </a>
              </Link>
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
      /* width: ${({ theme }) => theme.maxWidth};
      margin: 0 auto;
      position: absolute;
      left: 50%;
      transform: translateX(-50%); */
    `,
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
