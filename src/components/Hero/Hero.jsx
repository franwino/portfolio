import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import photo from "../../assets/profilepic.jpg";

const StyledContainer = styled(Container)`
  margin-top: 60px;
`;

export default function Hero() {
  return (
    <StyledContainer>
      <Row>
        <Col sm={true}>
          <Image src={photo} rounded fluid />
        </Col>
        <Col sm={true}>
          <h3>HI EVERYBODY! I AM</h3>
          <h1>FRANCISCO WINOCUR</h1>
          <h2>FRONT-END DEVELOPER</h2>
          <h4>Welcome to my site!</h4>
        </Col>
      </Row>
    </StyledContainer>
  );
}
