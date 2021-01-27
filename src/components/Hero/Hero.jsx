import styled from "styled-components";

import Card from "react-bootstrap/Card";

import photo from "../../assets/profilepic.jpg";

const StyledCard = styled(Card)`
  margin-top: 56px;
`;

export default function Hero() {
  return (
    <StyledCard>
      <Card.Img variant="top" src={photo} />
      <Card.Body>
        <Card.Title>
          <h3>HI EVERYBODY! I AM</h3>
          <h1>FRANCISCO WINOCUR</h1>
          <h2>JUNIOR FRONT-END DEVELOPER</h2>
        </Card.Title>
        <Card.Text>Welcome to my site!</Card.Text>
      </Card.Body>
    </StyledCard>
  );
}
