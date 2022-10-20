import { useRouter } from 'next/router';
import styled from 'styled-components';

import { blurDataUrl } from 'src/data/data';
import AutoHeightImageView from 'src/component/common/AutoHeightImageView';
import { Button } from 'styles/Common';
import Tag from 'src/component/common/Tag';

type WorkListItemType = {
  id: number;
  thumb: string;
  title: string;
  desc: string;
  category: string;
  tag: string[];
  link?: string;
  github?: string;
};
const WorkListItem: React.FC<WorkListItemType> = (props) => {
  const router = useRouter();
  // FUNCTION
  const onClickDetailViewBtn = (param: number) => {
    const isDev = process.env.NODE_ENV === 'development';
    if (isDev) {
      router.push(`/detail/${param}`);
    } else {
      console.log(router);
      router.push(`${router.basePath}/detail/${param}/index.html`);
    }
    return;
  };

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
        </Item.Desc.Info>
        <Item.Button.Container className='WorkListItem__button-container'>
          <Button onClick={onClickDetailViewBtn.bind(this, props.id)}>
            상세보기
          </Button>
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
    /* FUNCTION tablet size */
    @media (${({ theme }) => theme.windowSize['lt-s']}) {
      flex-direction: column;
    }
  `,
  Thumb: styled.div`
    width: 50%;
    flex-shrink: 0;
    /* FUNCTION tablet size */
    @media (${({ theme }) => theme.windowSize['lt-s']}) {
      width: 100%;
    }
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
      color: ${({ theme }) => theme.color.text_head};
      transition: font-size 0.3s;
      word-break: keep-all;
      /* FUNCTION pc */
      @media (${({ theme }) => theme.windowSize['lt-s']}) {
        font-size: ${({ theme }) => theme.fontSize.head.sm};
      }
      /* FUNCTION mb */
      @media (${({ theme }) => theme.windowSize['mb-m']}) {
        font-size: ${({ theme }) => theme.fontSize.head.xs};
      }
    `,
    Category: styled.div`
      font-size: ${({ theme }) => theme.fontSize.body.lg};
      color: ${({ theme }) => theme.color.text_2};
      margin-top: 0.8rem;
      transition: font-size 0.3s;

      /* FUNCTION mb */
      @media (${({ theme }) => theme.windowSize['mb-m']}) {
        font-size: ${({ theme }) => theme.fontSize.body.md};
      }
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
      word-break: keep-all;
      /* FUNCTION mb */
      @media (${({ theme }) => theme.windowSize['lt-s']}) {
        font-size: ${({ theme }) => theme.fontSize.body.md};
        line-height: 2;
      }
      /* FUNCTION mb */
      @media (${(props) => props.theme.windowSize['mb-m']}) {
        font-size: ${({ theme }) => theme.fontSize.body.rg};
      }
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
