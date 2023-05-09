import { StyledContainer } from '@/components/ui/container/styled';
import Pagination from '@/components/ui/pagination/pagination';
import styled from 'styled-components';

export const Container = styled(StyledContainer)`
  margin-top: 16px;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    margin-top: 24px;
    margin-bottom: 24px;
  }
`;

export const Main = styled.main`
  
`;

export const Quotes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (min-width: 768px) {
    gap: 16px;
  }
`;

export const QuotesPagination = styled(Pagination)`
  margin-top: 16px;

  @media (min-width: 768px) {
    gap: 24px;
  }
`;
