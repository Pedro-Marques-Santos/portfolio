import {
  AboutFormation,
  Container,
  ContainerFormationDate,
  Course,
  Date,
  Formation,
} from "./styles";

interface IFormationLocationAndDateProps {
  formation: string;
  date: string;
  course: string;
  aboutFormation?: string;
}

export function FormationLocationAndDate({
  formation,
  date,
  course,
  aboutFormation,
}: IFormationLocationAndDateProps) {
  return (
    <Container>
      <ContainerFormationDate>
        <Course>{course}</Course>
        <Date>{date}</Date>
      </ContainerFormationDate>
      <Formation>{formation}</Formation>
      <AboutFormation>{aboutFormation}</AboutFormation>
    </Container>
  );
}
