import styled from "styled-components";

export const Container = styled.div`
  max-width: 890px;
  margin: 0 auto;
  margin-top: 70px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
    margin-top: 30px;
  }
`;
