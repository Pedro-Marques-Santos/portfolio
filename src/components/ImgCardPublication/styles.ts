import styled from "styled-components";

export const Container = styled.a`
  display: block;
  overflow: hidden;
  margin-top: 40px;
  cursor: pointer;
  width: 100%;
  height: 400px;
  height: 400px;

  img {
    max-width: 100%;
    -moz-transition: all 0.5s;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
  }

  :hover img {
    -moz-transform: scale(1.2);
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }

  @media (max-width: 768px) {
    img {
      width: 100%;
      height: 400px;
      object-fit: cover;
      -moz-transform: none;
      -webkit-transform: none;
      transform: none;
    }
    :hover img {
      -moz-transform: none;
      -webkit-transform: none;
      transform: none;
    }
  }
`;
