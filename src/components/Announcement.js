import styled from 'styled-components';

const Container = styled.div`
  height: 30px;
  background-color: #ffcad4;
  color: #111;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>Free International Shipping On Orders Over $99.</Container>;
};

export default Announcement;
