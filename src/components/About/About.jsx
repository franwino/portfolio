import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";

import logoHTML from "../../assets/techs/HTML.svg";
import logoCSS from "../../assets/techs/CSS.svg";
import logoJavaScript from "../../assets/techs/JavaScript.svg";
import logoReactJS from "../../assets/techs/ReactJS.svg";
import logoGithub from "../../assets/techs/Github.svg";

const TECHNOLOGIES = [
  { name: "HTML", logo: logoHTML },
  { name: "CSS", logo: logoCSS },
  { name: "JavaScript", logo: logoJavaScript },
  { name: "ReactJS", logo: logoReactJS },
  { name: "Github", logo: logoGithub },
];

const StyledContainer = styled(Container)`
  margin-top: 60px;
`;

const TechCard = styled(Card)`
  border: none;
  justify-content: center;
  align-items: center;
`;

const TechImg = styled(Card.Img)`
  width: 80px;
  height: 80px;
`;

export default function About() {
  return (
    <StyledContainer id="about">
      <Row>
        <Col sm={true} className="text-center">
          <p>I'm a front-end web developer</p>
        </Col>
        <Col lg={true} className="text-center">
          <h4>Technologies I use</h4>
          <Container>
            <Row>
              {TECHNOLOGIES.map((tech) => (
                <Col xs={12} sm={6} md={4} xl={2}>
                  <TechCard className="text-center">
                    <TechImg fluid src={tech.logo} alt={tech.name} />
                    <Card.Body>
                      <Card.Title>{tech.name}</Card.Title>
                    </Card.Body>
                  </TechCard>
                </Col>
              ))}
            </Row>
          </Container>
        </Col>
      </Row>
    </StyledContainer>
  );
}
