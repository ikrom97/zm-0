import Link from 'next/link';
import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  max-width: 24px;
`;

export const LinksWrapper = styled.div`
  padding: 4px;
  background-color: ${({ theme }) => theme.white};
  display: flex;
  gap: 8px;
  visibility: hidden;
  opacity: 0;
  transition: 0.3s;

  ${Wrapper}:hover & {
    visibility: visible;
    opacity: 1;
  }
`;

export const SocialLink = styled(({ icon, ...rest }) => (
  <Link {...rest}>{icon}</Link>
))`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  min-width: 24px;
  height: 24px;
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.secondary};
  border-radius: 4px;
`;

export const ShareButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  min-width: 24px;
  height: 24px;
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.gray};
`;
