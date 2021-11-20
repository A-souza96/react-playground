import styled from "styled-components";

export const Container = styled.div`
  max-width: 1118px;
  margin: 0 auto;
  display: flex;
  color: white;
  align-items: center;
  justify-content: space-between;
  h1 {
    color: white;
    padding: 30px;
  }
  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    li {
      margin-right: 30px;
      a {
        text-decoration: none;
        color: white;

        padding: 13px;
        border-radius: 10px;

        transform: filter 2s;
        &:hover {
          filter: brightness(0.8);
        }
      }
    }
  }
`;
export const Nav = styled.nav`
  background-color: red;
  Container {
  }
`;
