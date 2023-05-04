import Button from '@/components/ui/button/button';
import Container from '@/components/ui/container/container';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.white};
  padding: 16px 0;

  @media (min-width: 1200px) {
    padding: 24px 0;
  }
`;

export const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
`;

export const MenuToggler = styled(Button).attrs({
  type: 'button',
})`
  color: ${({ theme }) => theme.secondary};

  @media (min-width: 768px) {
    display: none;
    visibility: hidden;
  }
`;
