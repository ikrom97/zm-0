import { StyledContainer } from './styled';

export default function Container({ children, ...rest }) {
  return (
    <StyledContainer {...rest}>
      {children}
    </StyledContainer>
  );
}
