import styled from "styled-components";

export const ContentContainer = styled.div`
  background-color: #2d2e32;
  padding-top: 80px;
  padding-bottom: 80px;
`;

export const Container = styled.div`
  max-width: 890px;
  margin: 0 auto;
  padding-left: 8px;
  padding-right: 8px;

  display: flex;
  justify-content: space-between;
  @media (max-width: 600px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const Information = styled.div`
  color: #fff;
  max-width: 500px;
  @media (max-width: 600px) {
    margin: 0 auto;
  }
`;

export const MyIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 25px;

  @media (max-width: 600px) {
    margin: 0 auto;
    margin-top: 25px;
  }

  a {
    color: #fff;
  }
`;
