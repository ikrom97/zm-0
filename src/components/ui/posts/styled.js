import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

export const StyledPosts = styled.aside`
  background-color: ${({ theme }) => theme.white};
  padding: 16px;
  display: flex;
  overflow-x: scroll;
  border-radius: 8px;
  gap: 8px;

  @media (min-width: 1200px) {
    flex-direction: column;
    min-width: max-content;
    overflow-x: hidden;
    padding-right: 10px;
    position: sticky;
    top: 32px;
    height: calc(100vh - 64px);

    &::-webkit-scrollbar {
      width: 6px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #E2B65C;
      border-radius: 8px;
    }
  }
`;

export const Post = styled(Link)`
  display: flex;
  min-width: max-content;
`;

export const PostImage = styled(Image)`
  border-radius: 4px;
`;
