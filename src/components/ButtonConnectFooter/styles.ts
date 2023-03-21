import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  a {
    text-decoration: none;
    color: white;
    cursor: pointer;
    font-weight: 200;
    font-size: 14px;
    padding: 5px;
    margin-left: 25px;
    :first-child {
      margin-left: 0px;
    }
    span {
      font-weight: 200;
      font-size: 15px;
    }
  }
`;
