import styled from 'styled-components';
import { Container, SectionCategoryTitle, Button } from 'styles/Common';

const Contact: React.FC = () => {
  return (
    <Container className='section'>
      <SectionCategoryTitle>Contact</SectionCategoryTitle>
      <div>
        <blockquote>
          A genius cannot win over one who tries, <br />
          and one who tries cannot win one who enjoys.
        </blockquote>
        <p>
          즐기는 자를 이길 수 있는 사람은 없습니다. <br />
          저에게는 퍼블리싱 업무가 즐거운 일입니다. 그리고 좋아하는 일을 잘
          해내고 싶은 욕심이 있습니다. <br />
          좋아하는 일을 즐기며 잘 해내는, 그런 멋진 사람이 되고 싶습니다. <br />{' '}
          <br />
          오늘보다 내일 더 멋진 사람이 되도록 노력하는,
          <br />
          웹 퍼블리셔 박예림입니다.
          <br />
          포트폴리오를 봐주셔서 감사합니다 :&#41;
        </p>
      </div>
      <div className='Contact__button-wrap'>
        <Button className='About__button' bgColor='secondaryBlue'>
          Mail
        </Button>
        <Button className='About__button' bgColor='secondaryBlue'>
          Tel
        </Button>
        <Button className='About__button' bgColor='secondaryBlue'>
          Github
        </Button>
      </div>
    </Container>
  );
};

export default Contact;
