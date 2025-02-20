import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer() {
  return (
    <footer className="py-4">
      <Container>
        <Row>
          <Col md={6}>
          <img src="https://getbootstrap.su/docs/5.1/assets/brand/bootstrap-logo.svg" width="24" height="19"/>
          <p>© 2017–2021</p>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
          <p className="fs-5 fw-bold">Features</p>
            <ul>
              <li><a className="link-secondary link-underline link-underline-opacity-0 text-muted">Cool stuff</a></li>
              <li><a href="#home" className="link-secondary link-underline link-underline-opacity-0 text-muted">Random feature</a></li>
              <li><a href="#home" className="link-secondary link-underline link-underline-opacity-0 text-muted">Team feature</a></li>
              <li><a href="#home" className="link-secondary link-underline link-underline-opacity-0 text-muted">Stuff for developers</a></li>
              <li><a href="#home" className="link-secondary link-underline link-underline-opacity-0 text-muted">Another one</a></li>
              <li><a href="#home" className="link-secondary link-underline link-underline-opacity-0 text-muted">Last time</a></li>
            </ul>
          </Col>
          <Col md={6}>
          <p className="fs-5 fw-bold">Resourses</p>
            <ul className='list-unstyled text-small'>
              <li><a href="#home" className="link-secondary link-underline link-underline-opacity-0 text-mutedlink-secondary link-underline link-underline-opacity-0 text-muted">Resource</a></li>
              <li><a href="#home" className="link-secondary link-underline link-underline-opacity-0 text-mutedlink-secondary link-underline link-underline-opacity-0 text-muted">Resource name</a></li>
              <li><a href="#home" className="link-secondary link-underline link-underline-opacity-0 text-mutedlink-secondary link-underline link-underline-opacity-0 text-muted">Another resource</a></li>
              <li><a href="#home" className="link-secondary link-underline link-underline-opacity-0 text-mutedlink-secondary link-underline link-underline-opacity-0 text-muted">Final resource</a></li>
            </ul>
          </Col>
          </Row>
          <Row>
          <Col md={6}>
            <p className="fs-5 fw-bold">About</p>
            <ul>
              <li><a href="#home" className="link-secondary link-underline link-underline-opacity-0 text-muted">Team</a></li>
              <li><a href="#home" className="link-secondary link-underline link-underline-opacity-0 text-muted">Locations</a></li>
              <li><a href="#home" className="link-secondary link-underline link-underline-opacity-0 text-muted">Privacy</a></li>
              <li><a href="#home" className="link-secondary link-underline link-underline-opacity-0 text-muted">Terms</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
      </footer>
      )
      }

      export default Footer
