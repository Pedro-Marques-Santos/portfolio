import { CardPublication } from "../../components/CardPublication";
import { Header } from "../../components/Header";
import { LineBlack } from "../../components/LineBlack";
import { Welcome } from "../../components/Welcome";
import { BorderContainer, Container, Home, Projetos } from "./styles";

import imgAirbnb from "../../assets/img/Airbnb.png";
import imgAirbnbMinWidth from "../../assets/img/Airbnb-min-width.png";
import imgQuiz from "../../assets/img/Quiz.png";
import imgCalisthenic from "../../assets/img/Calisthenic.png";
import { Resume } from "../../components/Resume";
import { Footer } from "../../components/Footer";
import { useEffect, useRef, useState } from "react";

export function Dashboard() {
  const projetos = useRef<HTMLDivElement>(null);
  const resumo = useRef<HTMLDivElement>(null);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  return (
    <Home>
      <Header refprojetos={projetos} refresumo={resumo} />
      <Container>
        <BorderContainer>
          <Welcome />
          <Projetos ref={projetos}>
            <LineBlack margintop={"100px"} marginbottom={"40px"} />
            {windowWidth < 375 ? (
              <CardPublication
                link="https://main--spectacular-souffle-d93bd8.netlify.app/"
                whatDevLanguage="React e Design Responsivo"
                title="Airbnb"
                img={imgAirbnbMinWidth}
              />
            ) : (
              <CardPublication
                link="https://main--spectacular-souffle-d93bd8.netlify.app/"
                whatDevLanguage="React e Design Responsivo"
                title="Airbnb"
                img={imgAirbnb}
              />
            )}
            <LineBlack margintop={"40px"} marginbottom={"40px"} />
            <CardPublication
              link="https://main--zesty-pie-0e7897.netlify.app/"
              whatDevLanguage="React e NodeJs"
              title="Calisthenic"
              img={imgCalisthenic}
            />
            <LineBlack margintop={"40px"} marginbottom={"40px"} />
            <CardPublication
              link="https://monumental-moxie-2e9966.netlify.app/"
              whatDevLanguage="React e Disign Responsivo"
              title="Quiz"
              img={imgQuiz}
            />
          </Projetos>
          <Resume refresumo={resumo} />
        </BorderContainer>
      </Container>
      <Footer />
    </Home>
  );
}
