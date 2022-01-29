import styled from 'styled-components';

const ContainerText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 22vh;
  width: 100%;
`;

const Text = styled.h3`
  font-size: 34px;
  text-transform: uppercase;
  letter-spacing: 5px;
`;

const Title = () => {
  return (
    <ContainerText>
      <Text>Popular Products</Text>
    </ContainerText>
  );
};

export default Title;
