import styled from 'styled-components';

export const Card = styled.blockquote`
  margin: 0;
  background-color: ${({ theme }) => theme.white};
  border-radius: 8px;
`;

export const Top = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 16px;
  gap: 8px;

  @media (min-width: 768px) {
    padding: 16px 24px;
  }
`;

export const Quote = styled.q`
  quotes: none;
`;

export const Bottom = styled.footer`
  padding: 8px 16px;
  border-top: 1px solid ${({ theme }) => theme.gray};
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (min-width: 768px) {
    padding: 8px 24px;
  }
`;
