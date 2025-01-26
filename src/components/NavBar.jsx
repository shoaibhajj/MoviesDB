import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router";

function NavBar({ handelSearch }) {
  const onSearch = (word) => {
    handelSearch(word);
  };
  return (
    <Navbar
      expand="lg"
      //   className="bg-body-tertiary"
      bg="warning"
      sticky="top"
      data-bs-theme="light"
    >
      <Container fluid>
        <Col sm="1">
          <Navbar.Brand href="/" style={{ fontWeight: "bolder" }}>
            Movies Land
          </Navbar.Brand>
        </Col>

        <Col></Col>
        <Col sm="9">
          <Form className="d-flex w-100">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e) => {
                onSearch(e.target.value);
              }}
            />
          </Form>
        </Col>
        <Col> </Col>
      </Container>
    </Navbar>
  );
}

export default NavBar;
