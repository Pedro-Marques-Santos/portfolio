import styled from "styled-components";

export const Container = styled.div`
  width: 55%;
  padding-right: 2%;
  padding-left: 10%;

  h2 {
    color: #147efb;
    font-size: 1.09rem;
    font-weight: 700;

    @media (max-width: 900px) {
      margin-top: 40px;
    }
  }

  h3 {
    margin-top: 12px;
    margin-bottom: 8px;
    color: #2d2e32;
    font-size: 1.4rem;
    line-height: 1.2;
    @media (max-width: 900px) {
      margin-bottom: 20px;
    }
  }

  div {
    color: #767676;
    font-size: 1.1rem;
    font-weight: 500;
    line-height: 1.3;
    font-family: "Mulish", sans-serif;
    strong {
      border-bottom: 1px solid #ccc;
    }
    @media (max-width: 900px) {
      max-width: 400px;
      margin: 0 auto;
    }
  }

  @media (max-width: 900px) {
    width: 100%;
    text-align: center;
    padding-right: 0px;
    padding-left: 0px;
  }
`;
