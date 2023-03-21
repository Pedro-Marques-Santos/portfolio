import styled from "styled-components";

export const Container = styled.div`
  margin-top: 100px;
  display: flex;
`;

export const Name = styled.div`
  font-size: 21px;
  font-weight: 400;
  letter-spacing: -0.04em;
`;

export const WorkAndLocal = styled.span`
  font-size: 21px;
  font-weight: 400;
  letter-spacing: -0.04em;
`;

export const TextAboutMe = styled.div`
  width: 50%;
  text-align: justify;
  @media (max-width: 550px) {
    width: 100%;
  }
`;

export const Resume = styled.div`
  margin-top: 30px;
  font-weight: 300;
  font-size: 19px;
  letter-spacing: -0.04em;
`;
