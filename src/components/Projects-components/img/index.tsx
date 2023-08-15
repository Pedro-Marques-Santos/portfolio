import styled from "styled-components";

import imgproject from "../../../assets/projectsimg/imgxxx 1.png";

const openDemo = () => {
  window.open("https://search-movie-five.vercel.app/dashboard", "_blank");
};

const Container = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    max-width: 500px;
    cursor: pointer;
  }

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export function Img() {
  return (
    <Container>
      <img src={imgproject} alt="project" onClick={openDemo} />
    </Container>
  );
}
