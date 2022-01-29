import { FaEnvelope } from 'react-icons/fa';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
  height: 60vh;
  background-color: #f3f3f3;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 50px;
  margin-bottom: 20px;
`;

const Description = styled.div`
  font-size: 22px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: 'center' })}
`;

const Accent = styled.span`
  color: red;
`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  border: none;
  ${mobile({ width: '80%' })}
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: #ffcad4;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>
        Keep Up To Date. Subscribe To <Accent>Monvie.</Accent>
      </Description>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <FaEnvelope />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
