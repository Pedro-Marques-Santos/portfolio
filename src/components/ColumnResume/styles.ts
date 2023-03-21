import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Status = styled.div`
  font-size: 17px;
  font-weight: 600;
  line-height: 36px;
  letter-spacing: -0.02em;

  width: 30%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Description = styled.div`
  width: 70%;

  font-size: 14.5px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: +0.04em;
  border-top: 1px solid #0000004d;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const LinkDescription = styled.a`
  color: var(--black);
  text-decoration: none;
  word-break: break-all;
  display: flex;
  flex-wrap: wrap;
  cursor: pointer;
  font-style: italic;
  margin-bottom: 10px;
  :hover {
    text-decoration: underline;
  }
`;
