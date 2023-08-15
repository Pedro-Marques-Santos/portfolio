import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 20px;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;
