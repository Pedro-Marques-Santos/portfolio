import imgproject from "../../../assets/projectsimg/imgxxx 1.png";
import { Container } from "./styles";

const openDemo = () => {
  window.open("https://search-movie-five.vercel.app/dashboard", "_blank");
};

export function Img() {
  return (
    <Container>
      <img src={imgproject} alt="project" onClick={openDemo} />
    </Container>
  );
}
