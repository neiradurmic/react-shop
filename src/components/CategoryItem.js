import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
  flex: 1;
  margin: 10px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  heigth: 100%;
  object-fit: cover;
  ${mobile({ height: '20vh' })}
`;

const Info = styled.div`
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: #fff;
  margin-bottom: 20px;
  text-transform: uppercase;
`;

const Button = styled.button`
  border: none;
  padding: 10px 20px;
  background-color: #fff;
  color: #111;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 600;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.category}`}>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Button>SHOP NOW</Button>
        </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;
