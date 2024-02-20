import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    max-width: 750px;
    overflow: hidden;
    cursor: pointer;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }
`;

interface IImg {
  img: string;
  demo: string;
}

export function Img({ img, demo }: IImg) {
  const openDemo = () => {
    window.open(`${demo}`, "_blank");
  };

  return (
    <Container>
      <img src={img} alt="project" onClick={openDemo} />
    </Container>
  );
}
