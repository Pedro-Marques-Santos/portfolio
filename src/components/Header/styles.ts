import styled from "styled-components";

export const ContentContainer = styled.div`
  width: 100%;
  height: 79px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.09);
`;

export const Container = styled.div`
  height: 100%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 1.2em;
    font-weight: bold;
    color: #2d2e32;
    cursor: pointer;
    @media (max-width: 900px) {
      font-size: 1.4em;
    }
  }

  padding-left: 8px;
  padding-right: 8px;
`;

export const MyLinks = styled.div`
  display: flex;
  gap: 20px;

  div {
    cursor: pointer;
    color: #2d2e32;
    font-weight: 600;
    @media (max-width: 900px) {
      display: none;
    }
    transition: 0.4s;
    :hover {
      color: #147efb;
    }
  }
`;

export const OpenSmLink = styled.div`
  font-size: 30px;
  color: black;
  cursor: pointer;
  display: none;
  @media (max-width: 900px) {
    display: flex;
  }
`;
