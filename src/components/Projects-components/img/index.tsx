import imgproject from "../../../assets/projectsimg/imgxxx 1.png";
import { Container } from "./styles";
interface IImg {
  demo: string;
}

export function Img({ demo }: IImg) {
  const openDemo = () => {
    window.open(`${demo}`, "_blank");
  };

  return (
    <Container>
      <img src={imgproject} alt="project" onClick={openDemo} />
    </Container>
  );
}
