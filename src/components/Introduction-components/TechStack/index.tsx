import { Container, ImagesAndIcons } from "./styles";

import imgcss from "../../../assets/skills/css3.9cecabbf6ce67609c48bc4f280a11002.svg";
import imgjavascript from "../../../assets/skills/javascript.de4c2594613e34b15666206bbede7327.svg";
import imgtailwind from "../../../assets/skills/tailwind.79614a5f61617ba49a0891494521226b.svg";
import imgreact from "../../../assets/skills/react.afac9c43724070bf6674f2692b7356a9.svg";

import nextjs from "../../../assets/skills/nexjts.png";
import nodejs from "../../../assets/skills/nodejs-development-services 1 (1).png";
import ts from "../../../assets/skills/Typescript_logo_2020 1.png";

export function TechStack() {
  return (
    <Container>
      <h6>Tech skills</h6>
      <ImagesAndIcons>
        <div>
          <img src={imgreact} alt="react" />
        </div>
        <div>
          <img src={nextjs} alt="javascript" />
        </div>
        <div>
          <img src={nodejs} alt="tailwind" />
        </div>
        <div>
          <img src={ts} alt="css" />
        </div>
        <div>
          <img src={imgjavascript} alt="css" />
        </div>
        <div>
          <img src={imgtailwind} alt="css" />
        </div>
        <div>
          <img src={imgcss} alt="css" />
        </div>
      </ImagesAndIcons>
    </Container>
  );
}
