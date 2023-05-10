import Button from '@/components/ui/button/button';
import styled from 'styled-components';

export const StyledNavigation = styled.nav`
  flex-direction: column;
  min-width: 100vw;
  position: relative;
  left: -5vw;
  ${({ isShown }) => isShown ? `
    display: flex;
    visibility: visible;
  ` : `
    display: none;
    visibility: hidden;
  `}

  @media (min-width: 768px) {
    position: static;
    display: flex;
    visibility: visible;
    min-width: 0;
    flex-direction: row;
    gap: 8px;
  }
`;

export const NavigationItem = styled(({ isActive, children, ...rest }) => (
  <Button {...rest}>{children}</Button>
))`
  border-radius: 0;
  border-top: 1px solid ${({ theme }) => theme.gray};
  max-width: none;
  ${({ isActive, theme }) => isActive && `
    background-color: ${theme.secondary};
  `}

  @media (min-width: 768px) {
    border-top: none;
    border-radius: 8px;

    ${({ isActive, theme }) => isActive && `
    background-color: ${theme.secondary};
  `}
  }
`;
