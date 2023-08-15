import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 80px;
  flex-wrap: wrap;
  @media (max-width: 375px) {
    gap: 0px;
    text-align: center;
  }
`;

export const CardContacts = styled.div`
  margin-top: 60px;
  display: flex;
  gap: 20px;
  @media (max-width: 375px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

export const IconCardContacts = styled.div`
  width: 70.89px;
  height: 70.89px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px,
    rgb(209, 213, 219) 0px 0px 0px 1px inset;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 30px;
  color: #147efb;
  flex-wrap: wrap;
`;

export const AboutCardContacts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Name = styled.div`
  color: black;
  font-size: 17px;
  font-weight: 600;
  flex-wrap: wrap;
`;

export const Information = styled.a`
  text-decoration: underline;
  cursor: pointer;
  color: black;
  flex-wrap: wrap;
`;
