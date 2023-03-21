import styled from "styled-components";

export const Container = styled.div`
  margin-top: 20px;
  :first-child {
    margin-top: 0px;
  }
`;

export const ContainerFormationDate = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Course = styled.div`
  font-size: 17px;
  font-weight: 600;
  line-height: 30px;
  letter-spacing: -0.02em;
`;

export const Date = styled.div`
  font-size: 13px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.02em;
`;

export const Formation = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.05em;
`;

export const AboutFormation = styled.div`
  margin-top: 12px;
  font-size: 15px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.05em;
  text-align: justify;
`;
