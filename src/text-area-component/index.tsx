import useMouse from "./style/hooks/useMouse";
import { StyledButton, StyledDiv, StyledParagraph } from "./style/styled";


function DoubleCLick() {
  const { handleClick, clicks, isDoubleClick, doubleClicks } = useMouse();
  return (
    <StyledDiv>
      <StyledButton onClick={handleClick}>Clique Aqui</StyledButton>
      <StyledParagraph>Número de cliques: {clicks}</StyledParagraph>
      <StyledParagraph>
        Número de duplos cliques: {doubleClicks}
      </StyledParagraph>
      {isDoubleClick && (
        <StyledParagraph>Duplo clique detectado!</StyledParagraph>
      )}
    </StyledDiv>
  );
}

export default DoubleCLick;
