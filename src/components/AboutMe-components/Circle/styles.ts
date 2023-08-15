import styled from "styled-components";

export const Container = styled.div`
  width: 140px;
  height: 140px;
  background: white;
  position: absolute;
  margin-left: 350px;
  margin-top: 300px;

  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 720px) {
    display: none;
  }
`;

export const Img1 = styled.div`
  img {
    width: 140px;
    -webkit-animation: rotate 9s linear infinite;
    animation: rotate 9s linear infinite;

    @keyframes rotate {
      100% {
        -webkit-transform: rotate(1turn);
        transform: rotate(1turn);
      }
    }
  }
`;

export const Img2 = styled.div`
  position: absolute;
  img {
    width: 52px;
    height: 52px;
  }
`;
