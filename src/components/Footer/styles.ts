import styled from "styled-components";

export const Container = styled.div`
  margin-top: 200px;
  min-height: 250px;
  background: var(--black);
  color: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Introduction = styled.div`
  padding-left: 8px;
  padding-right: 8px;
  font-size: 20px;
  font-weight: 100;
  line-height: 48px;
  letter-spacing: -0.04em;
  text-align: center;
`;

export const LetsConnect = styled.div`
  font-size: 20px;
  font-weight: 400;
  line-height: 53px;
  letter-spacing: -0.04em;

  span {
    margin-left: 8px;
    font-size: 22px;
  }
`;
