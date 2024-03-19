import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../img/logo.svg";

const Navigation = () => {
  return (
    <Navbar bg="danger" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} width="100" height="40" alt="pokemon-logo" />
        </Navbar.Brand>
        <Link to="/" className="text-white text-decoration-none">
          Home{" "}
        </Link>
      </Container>
    </Navbar>
  );
};

export default Navigation;
