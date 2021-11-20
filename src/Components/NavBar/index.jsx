import { Nav, Container } from "./styles";

const NavBar = () => {
  return (
    <>
      <Nav>
        <Container>
          <h1>CODELEGION</h1>
          <ul>
            <li>
              <a href=" ">HOME</a>
            </li>
            <li>
              <a href=" ">CONTACT</a>
            </li>
            <li>
              <a href=" ">COURSES</a>
            </li>
          </ul>
        </Container>
      </Nav>
    </>
  );
};

export default NavBar;
