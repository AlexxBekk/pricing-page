import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function PricingCards() {
  return (
    <Container className="w-100 mb-5">
      <Row className="g-4 justify-content-center">
        <Col md={4}>
          <Card className="h-100">
            <Card.Header className="text-center">Free</Card.Header>
            <Card.Body className="d-flex flex-column text-center">
              <Card.Title className="fs-2 text-center overflow-hidden mb-3">
                $0<span className="text-secondary">/mo</span>
              </Card.Title>
              <Card.Text className="text-center">
                10 users included 2 GB of storage
                <br />
                Email support
                <br />
                Help center access
              </Card.Text>
              <Button variant="outline-primary" className="mt-auto">
                Sign up for free
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100">
            <Card.Header className="text-center">Pro</Card.Header>
            <Card.Body className="d-flex flex-column text-center">
              <Card.Title className="fs-2 text-center overflow-hidden mb-3">
                $15<span className="text-secondary">/mo</span>
              </Card.Title>
              <Card.Text className="text-center">
                20 users included 10 GB of storage
                <br />
                Priority email support
                <br />
                Help center access
              </Card.Text>
              <Button variant="primary" className="mt-auto">
                Get started
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100 border-primary">
            <Card.Header className="text-center bg-primary text-white">
              Enterprise
            </Card.Header>
            <Card.Body className="d-flex flex-column text-center">
              <Card.Title className="fs-2 text-center overflow-hidden mb-3">
                $29<span className="text-secondary">/mo</span>
              </Card.Title>
              <Card.Text className="text-center">
                30 users included 15 GB of storage
                <br />
                Phone and email support
                <br />
                Help center access
              </Card.Text>
              <Button variant="primary" className="mt-auto">
                Contact us
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default PricingCards;
