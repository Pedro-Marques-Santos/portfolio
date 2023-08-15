import styled from "styled-components";

export const Container = styled.div`
  max-width: 890px;
  margin: 0 auto;
  margin-top: 200px;
  padding-left: 8px;
  padding-right: 8px;

  display: flex;
  margin-bottom: 200px;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;
