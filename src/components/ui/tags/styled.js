import Image from 'next/image';
import styled from 'styled-components';
import Title from '../title/title';
import Link from 'next/link';

export const StyledTags = styled.aside`
  background-color: ${({ theme }) => theme.white};
  border-radius: 8px;

  @media (min-width: 1200px) {
    min-width: 250px;
    width: 250px;
    position: sticky;
    top: 112px;
    height: calc(100vh - 136px);
  }
`;

export const TagsTitle = styled(Title)`
  padding-bottom: 4px;
  border-bottom: 1px solid ${({ theme }) => theme.lightPrimary};
  margin: 16px;
  margin-bottom: 8px;
`;

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  /* display: flex; */
  flex-direction: column;
  gap: 4px;
  padding-right: 8px;
  padding-top: 0;
  padding-bottom: 16px;
  padding-left: 16px;
  margin-right: 4px;
  
  @media (min-width: 768px) {
    display: block;
    column-count: 3;
  }

  @media (min-width: 1200px) {
    display: flex;
    overflow-x: hidden;
    position: sticky;
    top: 112px;
    height: calc(100% - 64px);

    &::-webkit-scrollbar {
      width: 6px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #E2B65C;
      border-radius: 8px;
    }
  }
`;

export const ListItem = styled.li`
  display: flex;
  
  @media (min-width: 768px) {
    margin-bottom: 4px;
  }

  @media (min-width: 1200px) {
    margin-bottom: 0;
  }
`;

export const Tag = styled(({ isCurrent, href, children, ...rest }) => (
  <Link href={href} {...rest}>{children}</Link>
))`
  text-decoration: none;

  ${({ isCurrent, theme }) => isCurrent && `
    pointer-events: none;
    color: ${theme.secondary};
  `}
`;

export const PostImage = styled(Image)`
  border-radius: 4px;
`;
