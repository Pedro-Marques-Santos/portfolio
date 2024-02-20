import {
  Container,
  ContentText,
  ContentImg,
  NameJob,
  NameHowWork,
  Temp,
  ContentWorks,
  Works,
} from "./styles";

interface IJobs {
  name1: string;
  name2: string;
  date: string;
  resposabilities: string[];
  img: string;
}

export function Jobs({ name1, name2, date, resposabilities, img }: IJobs) {
  return (
    <Container>
      <ContentImg>
        <img src={img} alt="logo" />
      </ContentImg>
      <ContentText>
        <NameHowWork>{name1}</NameHowWork>
        <NameJob>{name2}</NameJob>
        <Temp>{date}</Temp>
        <ContentWorks>
          <h3>Minhas resposabilidades:</h3>
          {resposabilities.map((skill, index) => {
            return <Works key={index}>- {skill};</Works>;
          })}
        </ContentWorks>
      </ContentText>
    </Container>
  );
}
