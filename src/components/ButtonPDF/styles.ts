import styled from "styled-components";

export const Container = styled.div`
  cursor: pointer;
  background: var(--black);
  color: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 49px;
  width: 90px;
  border-radius: 60px;

  transition: 1s;
  :hover {
    background: var(--blue);
  }
`;

export const ButtonName = styled.div`
  font-size: 13.5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled.span`
  font-size: 13.5px;
  font-weight: 300;
  display: inline-block;
`;
