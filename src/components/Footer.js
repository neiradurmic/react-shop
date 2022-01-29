import styled from 'styled-components';
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPinterestP,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaRegEnvelope,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaCcStripe,
} from 'react-icons/fa';
import { mobile } from '../responsive';

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: 'column' })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-right: 60px;
`;

const Logo = styled.h1``;

const Description = styled.p`
  margin: 20px 0px;
  text-align: justify;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #ffcad4;
  color: #111;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: 'none' })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${mobile({ backgroundColor: '#fff8f8' })}
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.div`
  width: 50%;
  display: flex;
  margin-bottom: 16px;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Monvie</Logo>
        <Description>
          Discover the latest fashion and lifestyle trends in the "Shop the
          look" and "Magazine" areas. Each season, the Monvie style guide and
          the style magazine from Monvie casual identity will find new ways to
          inspire you.
        </Description>
        <SocialContainer>
          <SocialIcon>
            <FaFacebook />
          </SocialIcon>
          <SocialIcon>
            <FaInstagram />
          </SocialIcon>
          <SocialIcon>
            <FaTwitter />
          </SocialIcon>
          <SocialIcon>
            <FaPinterestP />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Clothing</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>Magazine</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Shipping</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>FAQ</ListItem>
          <ListItem>Privacy Policy</ListItem>
        </List>
      </Center>
      <Right>
        <Contact>
          <ContactItem>
            <FaMapMarkerAlt style={{ marginRight: '10px' }} />
            Lamaine Grande 46, Paris, France
          </ContactItem>
          <ContactItem>
            <FaPhoneAlt style={{ marginRight: '10px' }} />
            +33 81 257 9664 323
          </ContactItem>
          <ContactItem>
            <FaRegEnvelope style={{ marginRight: '10px' }} />
            info@monvie.com
          </ContactItem>
        </Contact>
        <Payment>
          <FaCcVisa style={{ marginRight: '10px', fontSize: '28px' }} />
          <FaCcMastercard style={{ marginRight: '10px', fontSize: '28px' }} />
          <FaCcPaypal style={{ marginRight: '10px', fontSize: '28px' }} />
          <FaCcStripe style={{ marginRight: '10px', fontSize: '28px' }} />
        </Payment>
      </Right>
    </Container>
  );
};

export default Footer;
