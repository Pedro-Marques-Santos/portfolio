import { RefObject } from "react";
import { TableResume } from "../TableResume";
import { TitleResume } from "../TitleResume";
import { Container } from "./styles";

interface IResumeProps {
  refresumo: RefObject<HTMLDivElement>;
}

export function Resume({ refresumo }: IResumeProps) {
  return (
    <Container ref={refresumo}>
      <TitleResume />
      <TableResume />
    </Container>
  );
}
