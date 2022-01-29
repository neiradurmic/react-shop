import styled from 'styled-components';
import { FaShoppingCart, FaSearch, FaRegHeart } from 'react-icons/fa';
import { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
import { popularProducts } from '../data';

const Container = styled.div`
  overflow: hidden;
  margin: 5px;
  height: 60vh;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-bottom: 20px;
`;

const ImgContainer = styled.div`
  flex: 1;
  display: flex;
  height: 100%;
  position: relative;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.productSlideIndex * -20}vw);
`;
const Info = styled.div`
  opacity: 0;
  position: absolute;
  z-index: 3;
  display: flex;
  left: 15%;
  right: 15%;
  bottom: 30%;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Icon = styled.div`
  opacity: 0;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;

  &:hover {
    background-color: #fff;
    transform: scale(1.1);
  }
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #f5f5f5;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === 'left' && '10px'};
  right: ${(props) => props.direction === 'right' && '10px'};
  margin: auto;
  cursor: pointer;
  opacity: 0.6;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 50%;
  display: flex;
  width: auto;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.productSlideIndex * -20}vw);
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const Image = styled.img`
  height: 52vh;
  z-index: 2;
  margin: 20px;
`;

const Wrap = styled.div`
  position: relative;
  height: 50%;
  display: flex;
  width: auto;
  &:hover ${Info} {
    opacity: 1;
  }
  &:hover ${Icon} {
    opacity: 1;
  }
`;
const ProductSilder = ({ item }) => {
  const [productSlideIndex, setProductSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === 'left') {
      setProductSlideIndex(productSlideIndex > 0 ? productSlideIndex - 1 : 3);
    } else {
      setProductSlideIndex(productSlideIndex < 3 ? productSlideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick('left')}>
        <FaArrowLeft />
      </Arrow>
      <Wrapper>
        <Slide>
          <ImgContainer productSlideIndex={productSlideIndex}>
            {popularProducts.map((item) => (
              <Wrap>
                <Image src={item.img} key={item.id} />
                <Info>
                  <Icon>
                    <FaShoppingCart />
                  </Icon>
                  <Icon>
                    <FaSearch />
                  </Icon>
                  <Icon>
                    <FaRegHeart />
                  </Icon>
                </Info>
              </Wrap>
            ))}
          </ImgContainer>
        </Slide>
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick('right')}>
        <FaArrowRight />
      </Arrow>
    </Container>
  );
};

export default ProductSilder;
