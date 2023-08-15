/* eslint-disable @typescript-eslint/no-unused-vars */
import { RefObject } from "react";
import { Container, ContentContainer, MyLinks, OpenSmLink } from "./styles";

import { BsTextRight } from "react-icons/bs";

interface IHeader {
  homeref: React.RefObject<HTMLHeadingElement>;
  aboutref: React.RefObject<HTMLHeadingElement>;
  projectsref: React.RefObject<HTMLHeadingElement>;
  contactsref: React.RefObject<HTMLHeadingElement>;
}

export function Header({
  homeref,
  aboutref,
  projectsref,
  contactsref,
}: IHeader) {
  const myScrollToElement = (useref: RefObject<HTMLHeadingElement>) => {
    if (useref.current) {
      const boundingRef = useref.current.getBoundingClientRect();
      const topOffset = window.scrollY + boundingRef.top - 10;
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
  };

  return (
    <ContentContainer>
      <Container>
        <h1>Pedro.dev</h1>
        <MyLinks>
          <div onClick={() => myScrollToElement(aboutref)}>About</div>
          <div onClick={() => myScrollToElement(projectsref)}>Projects</div>
          <div onClick={() => myScrollToElement(contactsref)}>Contacts</div>
        </MyLinks>
        <OpenSmLink>
          <BsTextRight />
        </OpenSmLink>
      </Container>
    </ContentContainer>
  );
}
