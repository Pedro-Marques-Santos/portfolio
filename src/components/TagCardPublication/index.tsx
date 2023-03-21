import { Container, ContentLanguageAndTitle, Language, Title } from "./styles";

interface ITagCardPublicationProps {
  whatDevLanguage: string;
  title: string;
}

export function TagCardPublication({
  whatDevLanguage,
  title,
}: ITagCardPublicationProps) {
  return (
    <Container>
      <ContentLanguageAndTitle>
        <Language>{whatDevLanguage}</Language>
        <Title>{title}</Title>
      </ContentLanguageAndTitle>
      {/* <Arrow>
        <i className="material-symbols-outlined">east</i>
      </Arrow> */}
    </Container>
  );
}
