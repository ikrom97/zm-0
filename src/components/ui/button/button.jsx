import Link from "next/link";
import { StyledButton } from "./styled";

export default function Button({ href, children, ...rest }) {
  return (
    <StyledButton
      href={href}
      as={href ? Link : false}
      {...rest}
    >
      {children}
    </StyledButton>
  );
}
