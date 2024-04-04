'use client';
import { Button, SectionCategoryTitle } from '@/styles/Common';
import Work from '@/component/layout/work/WorkStyle';
import WorkItem from '@/component/layout/work/WorkItem';
import { WorkViewPropType } from '@/component/layout/work/type';

const WorkView: React.FC<WorkViewPropType> = ({ list }) => {
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
          {/* <WorkList setCurrentIdx={setCurrentIdx} /> */}
        </Work.Content.Container>
        <Work.Button.Container>
          <Button as="Button">더보기</Button>
        </Work.Button.Container>
      </Work.Container>
    </Work.Page>
  );
};

export default WorkView;
