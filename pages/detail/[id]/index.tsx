import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { workList } from 'src/data/data';
import DetailView from 'src/component/Detail/DetailView';
import Header from 'src/component/common/HeaderView';
import Footer from 'src/component/common/FooterView';


// COMPONENT main component
const Detail: NextPage = () => {
  const router = useRouter();
  const data = workList.filter(({ id }) => router.query.id === id.toString())[0];

  return (
    <>
      <Header />
      <DetailView data={data} />
      <Footer />
    </>
  );
};

export default Detail;
