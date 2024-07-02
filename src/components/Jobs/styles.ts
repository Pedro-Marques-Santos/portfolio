import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  @media (max-width: 500px) {
    flex-direction: column;
  }
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  border-radius: 5px;
  padding: 20px;
`;

export const ContentImg = styled.div`
  padding: 10px;
  @media (max-width: 500px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    max-width: 50px;
    @media (max-width: 500px) {
      max-width: 80px;
    }
  }
`;

export const ContentText = styled.div`
  width: 100%;
  padding: 5px;
`;

export const NameJob = styled.div`
  font-size: 16px;
  margin-top: 5px;
`;

export const NameHowWork = styled.div`
  font-weight: 500;
  font-size: 18px;
`;

export const Temp = styled.div`
  strong {
    font-weight: 500;
  }
`;

export const ContentWorks = styled.div`
  margin-top: 15px;
  h3 {
    font-size: 15px;
    font-weight: 500;
    margin-bottom: 4px;
  }
`;

export const Works = styled.div``;
