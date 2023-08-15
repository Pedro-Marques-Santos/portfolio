import styled from "styled-components";

export const Container = styled.div`
  max-width: 890px;
  margin: 0 auto;
  margin-top: 90px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  h6 {
    color: #2d2e32;
    font-weight: 500;
    font-size: 1.2rem;
    @media (max-width: 900px) {
      margin-bottom: 18px;
      font-size: 1.5rem;
    }
  }

  margin-bottom: 60px;

  @media (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const ImagesAndIcons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  div {
    width: 60.9px;
    height: 60.9px;
    border-radius: 100px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px,
      rgb(209, 213, 219) 0px 0px 0px 1px inset;

    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 35px;
    }
  }

  @media (max-width: 900px) {
    justify-content: center;
  }
`;
