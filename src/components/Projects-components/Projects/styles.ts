import styled from "styled-components";

export const Container = styled.div`
  max-width: 890px;
  margin: 0 auto;
  padding-left: 8px;
  padding-right: 8px;

  margin-bottom: 200px;
`;

export const ContentProjects = styled.div`
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 80px;

  &:last-child {
    margin-bottom: 0px;
  }
`;

export const Title = styled.div`
  color: #147efb;
  font-size: 1.09rem;
  font-weight: 700;
`;

export const FraseMotivation = styled.div`
  color: #2d2e32;
  font-size: 1.1rem;
  margin-bottom: 30px;
`;
