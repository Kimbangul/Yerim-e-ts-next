import styled from 'styled-components';
import { useRouter } from 'next/router';

import Tag from 'src/component/common/Tag';
import AutoHeightImageView from 'src/component/common/AutoHeightImageView';
import { onClickLinkBtn } from 'utils/utils';
import { Container, Button } from 'styles/Common';
import { WorkType } from 'src/data/data';

// PARAM type
type DetailType = {
  data: WorkType;
};

// COMPONENT main component
const DetailView: React.FC<DetailType> = ({ data }) => {
  const router = useRouter();

  // FUNCTION 목록으로 돌아가기 버튼 눌렀을 때
  const onClickBackBtn = () => {
    router.back();
    return;
  };

  return (
    <Detail.Container as='article' className='Detail'>
      <Detail.Inner>
        <Detail.Title.Container className='Detail__title-container'>
          <Detail.Title.TextContainer className='Detail__title__text-container'>
            <Detail.Title.Text className='Detail__title'>
              {data.title}
            </Detail.Title.Text>
            <Detail.Category className='Detail__category'>
              {data.category}
            </Detail.Category>
            <Detail.Tag.List className='Detail__tag-list'>
              {data.tag.map((el) => {
                return (
                  <Tag key={el} className='Detail__tag-item'>
                    {el}
                  </Tag>
                );
              })}
            </Detail.Tag.List>
            <Detail.Button.Container className='Detail__button-container'>
              {data.link ? (
                <Detail.Button.Button
                  onClick={onClickLinkBtn.bind(this, data.link, '_blank')}
                >
                  사이트 바로가기
                </Detail.Button.Button>
              ) : null}
              {data.github ? (
                <Detail.Button.Button
                  onClick={onClickLinkBtn.bind(this, data.github, '_blank')}
                >
                  Github 바로가기
                </Detail.Button.Button>
              ) : null}
            </Detail.Button.Container>
          </Detail.Title.TextContainer>
          <Detail.Image.Container className='Detail__image-container'>
            <AutoHeightImageView src={data.thumb} alt={data.title} />
          </Detail.Image.Container>
        </Detail.Title.Container>
        <Detail.Desc.Container className='Detail__desc-container'>
          <Detail.Desc.Title className='Detail__desc-title'>
            OverView.
          </Detail.Desc.Title>
          <Detail.Desc.Content className='Detail__desc'>
            {data.desc}
          </Detail.Desc.Content>
        </Detail.Desc.Container>
        <Detail.Desc.Container className='Detail__duration-container'>
          <Detail.Desc.Title className='Detail__duration-title'>
            Work Info.
          </Detail.Desc.Title>
          <Detail.Desc.InfoList className='Detail__InfoList'>
            <Detail.Desc.Content as='li' className='Detail__InfoList-item'>
              <Detail.Desc.Label>제작 기간</Detail.Desc.Label>
              {data.duration}
            </Detail.Desc.Content>
            <Detail.Desc.Content as='li' className='Detail__InfoList-item'>
              <Detail.Desc.Label>제작 영역</Detail.Desc.Label>
              {data.section}
            </Detail.Desc.Content>
            <Detail.Desc.Content as='li' className='Detail__InfoList-item'>
              <Detail.Desc.Label>사용 툴</Detail.Desc.Label>
              {data.tool}
            </Detail.Desc.Content>
          </Detail.Desc.InfoList>
        </Detail.Desc.Container>
        <Detail.Button.Container className='Detail__button-container'>
          <Detail.Button.Button onClick={onClickBackBtn}>
            목록으로
          </Detail.Button.Button>
        </Detail.Button.Container>
      </Detail.Inner>
    </Detail.Container>
  );
};

// COMPONENT style
const Detail = {
  Container: styled(Container)`
    margin: 0 auto;
    padding-bottom: 7.2rem;
    height: auto;
    .Detail__InfoList-item {
      margin-top: 0.8rem;
      display: flex;
    }
  `,

  Inner: styled.div`
    width: 80rem;
    opacity: 0;
    @keyframes fadeInAni {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    transition: width 0.3s, padding 0.3s;
    animation: fadeInAni 0.3s 0.3s ease-in-out both;
    @media (max-width: 800px) {
      width: 100%;
      padding: 0 6rem;
    }
    @media (${({ theme }) => theme.windowSize['mb-m']}) {
      padding: 0 3rem;
    }
  `,
  Title: {
    Text: styled.h2`
      font-size: ${({ theme }) => theme.fontSize.head.xl};
      font-weight: 700;
      color: ${({ theme }) => theme.color.text_head};
      transition: font-size 0.3s;
      word-break: keep-all;
      /* FUNCTION pc */
      @media (${({ theme }) => theme.windowSize['lt-s']}) {
        font-size: ${({ theme }) => theme.fontSize.head.md};
      }
      /* FUNCTION mb */
      @media (${({ theme }) => theme.windowSize['mb-m']}) {
        font-size: ${({ theme }) => theme.fontSize.head.rg};
      }
    `,
    Container: styled.div`
      gap: 5.6rem;
    `,
    TextContainer: styled.div`
      padding-top: 3.2rem;
      display: flex;
      flex-direction: column;
      align-self: stretch;
      text-align: left;
    `,
  },
  Category: styled.div`
    font-size: ${({ theme }) => theme.fontSize.body.lg};
    color: ${({ theme }) => theme.color.text_2};
    font-weight: 400;
    margin-top: 0.8rem;
    transition: font-size 0.3s;

    /* FUNCTION mb */
    @media (${({ theme }) => theme.windowSize['mb-m']}) {
      font-size: ${({ theme }) => theme.fontSize.body.md};
    }
  `,
  Desc: {
    Container: styled.div`
      margin-top: 7.2rem;
    `,
    Content: styled.p`
      font-size: ${({ theme }) => theme.fontSize.body.rg};
      color: ${({ theme }) => theme.color.text_4};
      line-height: 2;
      word-break: keep-all;
      display: flex;
      white-space: pre-line;
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
    Title: styled.h3`
      color: ${({ theme }) => theme.color.text_3};
      font-size: ${({ theme }) => theme.fontSize.head.sm};
      font-weight: 600;
      transition: font-size 0.3s;
      margin-bottom: 1.6rem;
      /* FUNCTION mb */
      @media (${({ theme }) => theme.windowSize['mb-m']}) {
        font-size: ${({ theme }) => theme.fontSize.head.xs};
      }
    `,
    Label: styled.span`
      flex-shrink: 0;
      font-weight: 600;
      width: 8rem;
      display: inline-block;
      color: ${({ theme }) => theme.color.point};
    `,
    InfoList: styled.ul`
      margin-top: 0;
    `,
  },
  Tag: {
    List: styled.ul`
      display: flex;
      margin-top: 3.2rem;
      flex-wrap: wrap;
      gap: 0.8rem;
      justify-content: flex-start;
    `,
  },
  Image: {
    Container: styled.div`
      position: relative;
      width: 100%;
      border-radius: 0.8rem;
      overflow: hidden;
      margin: 0 auto;
      margin-top: 7.2rem;
    `,
  },
  Button: {
    Container: styled.div`
      display: flex;
      justify-content: center;
      margin-top: 5.6rem;
      gap: 1.6rem;
      flex-grow: 1;
      align-items: self-end;
    `,
    Button: styled(Button)`
      transition: all 0.3s, width 0.3s;
      @media (${({ theme }) => theme.windowSize['mb-l']}) {
        width: auto;
      }
    `,
  },
};

export default DetailView;
