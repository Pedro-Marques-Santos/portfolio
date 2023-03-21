import styled from "styled-components";

interface IContainer {
  font: string;
}

export const Container = styled.span<IContainer>`
  font-size: ${(props) => props.font};
  font-weight: 600;
  letter-spacing: -0.04em;
  color: var(--blue);
`;
