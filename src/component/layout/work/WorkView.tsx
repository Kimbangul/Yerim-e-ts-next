'use client';
import { useEffect, useMemo, useState } from 'react';
import { Button, SectionCategoryTitle } from '@/styles/Common';
import Work from '@/component/layout/work/WorkStyle';
import WorkItem from '@/component/layout/work/WorkItem';
import { WorkViewPropType } from '@/component/layout/work/type';
import { workList } from '@/util/data';
import { WorkType } from '@/util/type';
import { GetListItemType } from '@/component/layout/work/type';

// FUNCTION 리스트 가져오기
const getListItem: GetListItemType = (lastPage: number, list: WorkType[]) => {
  const newList = workList.slice(list.length, lastPage);
  return [...list, ...newList];
};

const WorkView: React.FC<WorkViewPropType> = ({ work }) => {
  // PARAM state
  const [lastItem, setLastItem] = useState(6);
  const [list, setList] = useState<WorkType[]>(getListItem(lastItem, []));

  // PARAM 불러온 페이지의 최대 갯수가 데이터의 총합보다 같거나 많은 경우, 더보기 버튼을 숨김
  const isAbleLoad = useMemo(() => (lastItem >= workList.length ? false : true), [lastItem]);

  // FUNCTION lastItem이 바뀌면 리스트 가져오기 실행
  useEffect(() => {
    setList(prev => getListItem(lastItem, prev));
  }, [lastItem]);

  // FUNCTION 더보기 버튼 클릭 시 실행
  const onClickLoadBtn = () => {
    setLastItem(prev => prev + 6);
  };

  return (
    <Work.Page className="section" id="work_page">
      <SectionCategoryTitle>Work</SectionCategoryTitle>
      <Work.Container className="Work__container">
        <Work.Text.Container className="Work__text-container">
          <Work.Text.Title className="Work__title">
            {'Work'.split('').map((el, idx) => (
              <Work.Text.Word key={el + idx}>{el}</Work.Text.Word>
            ))}
          </Work.Text.Title>
        </Work.Text.Container>
        <Work.Content.Container className="Work__Content">
          {list.map((el, idx) => (
            <WorkItem {...el} key={el.id} />
          ))}
        </Work.Content.Container>
        <Work.Button.Container>
          {isAbleLoad && (
            <Button as="button" onClick={onClickLoadBtn}>
              더보기
            </Button>
          )}
        </Work.Button.Container>
      </Work.Container>
    </Work.Page>
  );
};

export default WorkView;
