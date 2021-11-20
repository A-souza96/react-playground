import styled from "styled-components";

export const Container = styled.section`
  max-width: 1118px;
  margin: 0 auto;
  display: flex;
  color: white;
  align-items: center;
  justify-content: space-between;
  margin-top: 120px;
  h1 {
    color: white;
    font-size: 30px;
    bold {
      font-size: 50px;
      color: red;
      span {
        color: darkred;
      }
    }
    p {
      margin-top: 50px;
      color: red;
    }

    button {
      background-color: red;
      color: white;
      margin-top: 30px;
      padding: 15px;
      border-radius: 30px;

      transition: filter 0.2s;
      &:hover {
        filter: brightness(0.8);
      }
    }
  }
  div.hero-content {
    height: 500px;
    width: 400px;
    img {
      height: 400px;
      width: 400px;
      border-radius: 40px;
    }
  }

  div.color {
    background: #eee;
  }
`;
