import styled from "styled-components";

const openDemo = () => {
  window.open("https://deluxe-froyo-8651cb.netlify.app/", "_blank");
};

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
}

export function Img({ img }: IImg) {
  return (
    <Container>
      <img src={img} alt="project" onClick={openDemo} />
    </Container>
  );
}
