import { StyledTitle } from './styled';

export default function Title({ children, ...rest }) {
  return (
    <StyledTitle
      {...rest}
    >
      {children}
    </StyledTitle>
  );
}
