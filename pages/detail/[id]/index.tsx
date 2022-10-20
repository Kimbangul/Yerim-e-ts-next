import { NextPage, GetStaticPaths, GetStaticProps } from 'next';

import { workList, WorkType } from 'src/data/data';
import DetailView from 'src/component/Detail/DetailView';
import Header from 'src/component/common/HeaderView';
import Footer from 'src/component/common/FooterView';

export const getStaticPaths: GetStaticPaths = (props) => {
  const paths = workList.map(({ id }) => ({
    params: { id: `${id}` },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = (props) => {
  const paramsIdData = `${props.params?.id}`;
  // TODO 데이터 정리 후 수정
  const data = workList.filter(({ id }) => paramsIdData === id.toString())[0];
  return {
    props: {
      data,
    },
  };
};

// PARAM type
type DetailViewType = {
  paramsIdData: string;
  data: WorkType;
};

// COMPONENT main component
const Detail: NextPage<DetailViewType> = ({ data }) => {
  console.log(data);
  return (
    <>
      <Header />
      <DetailView data={data} />
      <Footer />
    </>
  );
};

export default Detail;
