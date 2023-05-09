import Link from 'next/link';
import styled from 'styled-components';

export const StyledItem = styled.li`
  display: flex;
`;

export const PaginationLink = styled(({ isDisabled, children, ...rest }) => (
  <Link {...rest}>{children}</Link>
))`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 24px;
  width: 24px;
  height: 24px;
  color: ${({ isDisabled, theme }) => isDisabled ? theme.gray : theme.primary};
  pointer-events: ${({ isDisabled }) => isDisabled ? 'none' : 'all'};
  border-radius: 4px;
  line-height: 14px;
  font-size: 14px;
  text-decoration: none;
  transition: 0.3s;
`;
