import Link from 'next/link';
import styled from 'styled-components';

export const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0 16px;
  font-size: 14px;
  color: ${({ theme }) => theme.gray};
`;

export const Tag = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
`;
