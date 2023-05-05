import { StyledText } from './styled';

export default function Text({ children, ...rest }) {
  return (
    <StyledText {...rest}>
      {children}
    </StyledText>
  );
}
