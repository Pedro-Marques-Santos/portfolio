import styled from "styled-components";

export const Container = styled.div`
  cursor: pointer;
  margin-top: 20px;
  background: var(--blue);
  color: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 41px;
  width: 151px;
  border-radius: 60px;
`;

export const ButtonName = styled.div`
  font-size: 13.5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled.span`
  margin-left: 3px;
  font-size: 13.5px;
  font-weight: 300;
  display: inline-block;
`;
