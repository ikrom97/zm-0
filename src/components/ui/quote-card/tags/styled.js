import Link from 'next/link';
import styled from 'styled-components';

export const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px 16px;
  font-size: 14px;
  color: ${({ theme }) => theme.gray};
`;

export const Tag = styled(({ isCurrent, href, children, ...rest }) => (
  <Link href={href} {...rest}>{children}</Link>
))`
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  transition: 0.3s;
  ${({ isCurrent }) => isCurrent && `
    pointer-events: none;
    font-weight: bold;
  `}

  @media (min-width: 1200px) {
    &:hover {
      color: ${({ theme }) => theme.secondary}
    }
  }
`;
