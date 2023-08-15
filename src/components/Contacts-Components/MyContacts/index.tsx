import {
  AboutCardContacts,
  CardContacts,
  Container,
  IconCardContacts,
  Information,
  Name,
} from "./styles";

import { GrLinkedin } from "react-icons/gr";
import { MdEmail } from "react-icons/md";

export function MyContacts() {
  return (
    <Container>
      <CardContacts>
        <IconCardContacts>
          <GrLinkedin />
        </IconCardContacts>
        <AboutCardContacts>
          <Name>Linkedin</Name>
          <Information
            href={"https://www.linkedin.com/in/pedromarques01/"}
            target="_blank"
          >
            pedromarques01
          </Information>
        </AboutCardContacts>
      </CardContacts>
      <CardContacts>
        <IconCardContacts>
          <MdEmail />
        </IconCardContacts>
        <AboutCardContacts>
          <Name>E-mail</Name>
          <Information>pedromarquesnoot@outlook.com</Information>
        </AboutCardContacts>
      </CardContacts>
    </Container>
  );
}
