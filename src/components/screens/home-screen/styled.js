import { StyledContainer } from '@/components/ui/container/styled';
import Pagination from '@/components/ui/pagination/pagination';
import styled from 'styled-components';

export const Container = styled(StyledContainer)`
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
    flex-direction: row-reverse;
    gap: 16px;
  }
`;

export const Main = styled.main``;

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
`;
