import { MyContacts } from "../MyContacts";
import { Container, Title } from "./styles";

interface IContacts {
  contactsref: React.RefObject<HTMLHeadingElement>;
}

export function Contacts({ contactsref }: IContacts) {
  return (
    <Container>
      <Title ref={contactsref}>CONTACT</Title>
      <h3>
        sinta-se à vontade para entrar em contato comigo e iniciar uma conversa.
        👇
      </h3>
      <MyContacts />
    </Container>
  );
}
