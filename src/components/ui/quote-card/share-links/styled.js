import Link from 'next/link';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
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
  transition: 0.3s;
  visibility: hidden;
  display: none;

  ${Wrapper}:hover & {
    visibility: visible;
    display: flex;
  }
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
