import { StyledContainer } from '@/components/ui/container/styled';
import Image from 'next/image';
import styled from 'styled-components';

export const Screen = styled(StyledContainer)`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.gray};

  @media (min-width: 768px) {
    display: block;
    margin-top: 40px;
    margin-bottom: 40px;
  }
`;

export const Author = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    gap: 16px;
    max-width: max-content;
  }

  @media (min-width: 1200px) {
    float: right;
    margin-left: 80px;
  }
`;

export const AuthorImage = styled(Image)`
  width: 419px;
  height: auto;
  object-fit: contain;
  border-radius: 4px;

  @media (min-width: 768px) {
    border-radius: 8px;
  }
`;

export const AuthorQuote = styled.q`
  @media (min-width: 1200px) {
    text-align: center;
  }
`;

export const ScreenTitle = styled.h1`
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  margin: 0;
  color: ${({ theme }) => theme.secondary}
`;

export const AuthorName = styled.h2`
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  margin-top: 0;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.primary};

  @media (min-width: 768px) {
    margin-bottom: 16px;
    font-size: 48px;
    line-height: 56px;
  }
`;

export const AuhtorDetail = styled.p`
  margin: 0;
  padding: 16px 0;
  border-top: 1px solid ${({ theme }) => theme.lightPrimary};
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: flex-start;

  @media (min-width: 768px) {
    gap: 16px;
  }

  @media (min-width: 768px) {
    padding: 24px 16px;
  }
`;
