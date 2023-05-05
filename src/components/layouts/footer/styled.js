import ZMIcon from '@/components/icons/zm-icon';
import Container from '@/components/ui/container/container';
import styled from 'styled-components';

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.white};
  padding: 16px 0;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-top: auto;

  @media (min-width: 768px) {
    padding: 24px 0;
  }

  @media (min-width: 1200px) {
    padding: 32px 0;
  }
`;

export const FooterContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;  

  @media (min-width: 1200px) {
    gap: 24px;
  }
`;

export const Copyright = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  color: ${({ theme }) => theme.secondary};
`;

export const Icon = styled(ZMIcon)`
  display: none;
  visibility: hidden;

  @media (min-width: 768px) {
    display: block;
    visibility: visible;
  }
`;
