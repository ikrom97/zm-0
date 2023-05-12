import Link from 'next/link';
import styled from 'styled-components';

export const Card = styled.blockquote`
  position: relative;
  margin: 0;
  background-color: ${({ theme }) => theme.white};
  border-radius: 8px;
  flex-grow: 1;
`;

export const Top = styled.div`
  position: relative;
  padding: 8px 16px;

  @media (min-width: 768px) {
    padding: 16px 24px;
  }
`;

export const Hash = styled(Link)`
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  float: right;
  text-decoration: none;
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.lightPrimary};
  min-height: 24px;
  padding: 4px 16px;
  border-radius: 0 8px 0 8px;
  margin-left: 16px;
  margin-bottom: 16px;
  position: relative;
  z-index: 1;
`;

export const Quote = styled.q`
display: block;
  quotes: none;
  margin-bottom: 8px;
`;

export const Bottom = styled.footer`
  padding: 8px 16px;
  border-top: 1px solid ${({ theme }) => theme.gray};
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    padding: 8px 24px;
  }
`;

export const ToggleTags = styled.button.attrs({
  type: 'button',
})`
  border: none;
  padding: 0;
  cursor: pointer;
  font-size: 14px;
  color: ${({ theme }) => theme.secondary};
  background-color: transparent;
`;
