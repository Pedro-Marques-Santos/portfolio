import { Container } from "./styles";

interface IImgCardPublicationProps {
  img: string;
  link: string;
}

export function ImgCardPublication({ img, link }: IImgCardPublicationProps) {
  return (
    <Container href={link}>
      <img src={img} alt="" />
    </Container>
  );
}
