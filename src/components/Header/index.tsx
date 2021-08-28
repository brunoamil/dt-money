import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./styles";

interface HeaderProps {
  onOpenNewTransctionModal: () => void;
}

export function Header({ onOpenNewTransctionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Logo Dt Money" />
        <button type="button" onClick={onOpenNewTransctionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
