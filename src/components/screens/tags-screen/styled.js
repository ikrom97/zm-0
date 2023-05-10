import { StyledContainer } from '@/components/ui/container/styled';
import Title from '@/components/ui/title/title';
import Link from 'next/link';
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

export const Main = styled.main`
  flex-grow: 1;
  background-color: ${({ theme }) => theme.white};
  border-radius: 8px;
  padding: 8px 16px;

  @media (min-width: 768px) {
    padding: 16px 24px;
  }
`;

export const ScreenTitle = styled(({ children, ...rest }) => (
  <Title as="h1" {...rest}>{children}</Title>
))`
  padding-bottom: 4px;
  border-bottom: 1px solid ${({ theme }) => theme.lightPrimary};
  margin-bottom: 8px;

  @media (min-width: 768px) {
    margin-bottom: 16px; 
  }
`;

export const TagsList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  @media (min-width: 768px) {
    column-count: 3;
  }

  @media (min-width: 1200px) {
    column-count: 4;
  }
`;

export const TagsItem = styled.li`
  display: flex;
`;

export const TagsLink = styled(Link)`
  text-decoration: none;
  display: flex;
  max-width: max-content;
  margin-bottom: 4px;
  transition: 0.3s;

  @media (min-width: 768px) {
    margin-bottom: 8px;
  }

  @media (min-width: 1200px) {
    &:hover {
      color: ${({ theme }) => theme.secondary};
    }
  }
`;
