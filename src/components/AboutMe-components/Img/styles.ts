import styled from "styled-components";

export const Container = styled.div`
  width: 45%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    width: 380px;
    height: 321px;
    border-radius: 30px;
    @media (max-width: 700px) {
      width: 100%;
      max-width: 380px;
      height: auto;
      padding-left: 0px;
      padding-right: 0px;
    }
  }

  @media (max-width: 900px) {
    width: 100%;
  }
`;
