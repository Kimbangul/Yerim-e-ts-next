import {
  NextPage,
  GetServerSideProps,
  InferGetServerSidePropsType,
  GetStaticPaths,
  GetStaticProps,
} from 'next';
import { title } from 'process';
import Header from 'src/component/common/HeaderView';
import Tag from 'src/component/common/Tag';

import { workList, WorkType } from 'src/data/data';

export const getStaticPaths: GetStaticPaths = (props) => {
  const paths = workList.map(({ title }) => ({
    params: { id: `${title}` },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = (props) => {
  const id = `${props.params?.id}`;
  return {
    props: {
      id,
    },
  };
};
const Detail: NextPage<{ id: string }> = ({ id }) => {
  return (
    <article className='Detail'>
      <Header />
      <h2>{id}</h2>
      <ul className='Detail__tag-list'>
        <Tag className='Detail__tag-item'>태그1</Tag>
        <Tag className='Detail__tag-item'>태그2</Tag>
      </ul>
    </article>
  );
};

// Detail.getInitialProps = ({ query }) => {
//   const pageId = `${query.id}`;
//   return {
//     pid: pageId,
//   };
// };

export default Detail;
