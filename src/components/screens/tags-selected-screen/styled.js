import Container from '@/components/ui/container/container';
import styled from 'styled-components';

export const Wrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  margin-bottom: 16px;
  gap: 24px;

  @media (min-width: 768px) {
    margin-top: 24px;
    margin-bottom: 24px;
  }

  @media (min-width: 1200px) {
    flex-direction: row;
    gap: 16px;
  }
`;

export const Main = styled.main`
  flex-grow: 1;
`;

export const Quotes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (min-width: 768px) {
    gap: 16px;
  }
`;
