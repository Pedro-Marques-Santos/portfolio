import { ImgCardPublication } from "../ImgCardPublication";
import { TagCardPublication } from "../TagCardPublication";
import { Container } from "./styles";

interface CardPublicationProps {
  whatDevLanguage: string;
  title: string;
  img: string;
  link: string;
}

export function CardPublication({
  whatDevLanguage,
  title,
  img,
  link,
}: CardPublicationProps) {
  return (
    <Container>
      <TagCardPublication whatDevLanguage={whatDevLanguage} title={title} />
      <ImgCardPublication img={img} link={link} />
    </Container>
  );
}
