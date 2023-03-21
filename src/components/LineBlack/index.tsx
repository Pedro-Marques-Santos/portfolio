import { Container } from "./styles";

interface ILineBlack {
  margintop: string;
  marginbottom: string;
}

export function LineBlack({ margintop, marginbottom }: ILineBlack) {
  return <Container top={margintop} bottom={marginbottom}></Container>;
}
