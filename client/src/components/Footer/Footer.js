import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  background-color: #0c005a;
  display: flex;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  flex: 1;
`;

const Logo = styled.h1``;
const Desc = styled.div`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  display: flex;
  align-items: center;
  margin-right: 20px;
  justify-content: center;
  color: white;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  maring: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Footer = () => {
  return (
    <Container style={{ color: "white" }}>
      <Left style={{ color: "white" }}>
        <Logo style={{ color: "white" }}>
          TOUNES TA9RA <div className=""></div>
        </Logo>
        <Desc style={{ color: "white" }}>
          La lecture est ainsi faite de ce que nous savons, de ce que nous
          apprenons et de ce que nous n'apprenons que parce que nous le savions
          déjà et de ce que nous savons mieux maintenant parce que nous venons
          de le rapprendre.
        </Desc>
        <SocialContainer>
          <SocialIcon color="#385999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="#E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="#55ACEE">
            <Twitter />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title style={{ color: "white" }}>Genre</Title>
        <List style={{ color: "white" }}>
          <ListItem>classique</ListItem>
          <ListItem>Romans</ListItem>
          <ListItem>Philosophie</ListItem>
          <ListItem>Développement personnel</ListItem>
          <ListItem>Sciences</ListItem>
          <ListItem>Dictionnaire</ListItem>
          <ListItem>Politique</ListItem>
          <ListItem>Poésie</ListItem>
        </List>
      </Center>

      <Right>
        <Title style={{ color: "white" }}>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px", color: "white" }} /> 622 manouba ,
          mornaguia 1110
        </ContactItem>

        <ContactItem>
          {" "}
          <Phone style={{ marginRight: "10px", color: "white" }} /> +216 26 214
          214{" "}
        </ContactItem>

        <ContactItem>
          <MailOutline style={{ marginRight: "10px", color: "white" }} />
          contact@tounesta9ra.com
        </ContactItem>

        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
