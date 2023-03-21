import styled from "styled-components";

interface IContainer {
  top: string;
  bottom: string;
}

export const Container = styled.hr<IContainer>`
  border: 1px dashed #d8d7d6;
  margin-top: ${(props) => props.top};
  margin-bottom: ${(props) => props.bottom};
`;
