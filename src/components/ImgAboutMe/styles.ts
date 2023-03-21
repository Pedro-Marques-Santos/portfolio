import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  @media (max-width: 550px) {
    display: none;
  }
`;
