import styled from "styled-components";

export const Container = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  a {
    color: #2d2e32;
  }
  h1 {
    color: #2d2e32;
    font-size: 3.2em;
    span {
      margin-left: 12px;
      img {
        position: absolute;
        width: 56.25px;
      }
      @media (max-width: 900px) {
        display: none;
      }
    }
    @media (max-width: 900px) {
      text-align: center;
      line-height: 1.2em;
    }
  }
  @media (max-width: 900px) {
    margin-top: 30px;
    width: 100%;
    order: 2;
    padding-left: 8px;
    padding-right: 8px;
  }
`;

export const About = styled.div`
  margin-top: 20px;
  max-width: 480px;
  color: #555;
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.6;
  font-family: "Mulish", sans-serif;
  @media (max-width: 900px) {
    margin: 0 auto;
    text-align: center;
    margin-top: 30px;
    font-size: 1.4rem;
  }
`;

export const Icons = styled.div`
  margin-top: 40px;

  span {
    cursor: pointer;
    margin-right: 15px;
    color: #2d2e32;
  }
  @media (max-width: 900px) {
    text-align: center;
  }
`;
