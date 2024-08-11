import { Col, Container, Row } from "react-bootstrap";
import { GoRocket } from "react-icons/go";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Container className="mt-5 pt-4">
      <Row className="d-flex justify-content-center">
        <Col className="text-center d-flex flex-column align-items-center" sm={12} md={6} lg={5}>
          <img src="/images/error404.png" alt="lost in space" className="img-fluid" />
          <Link to="/" className="link-container darkblue d-flex align-items-center fs-4">
            <GoRocket className="me-2" />
            Go home, astronaut
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
