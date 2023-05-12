import Container from '@/components/ui/container/container';
import styled from 'styled-components';

export const Main = styled((props) => (
  <Container as="main" {...props}>{props.children}</Container>
))`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  margin-bottom: 16px;
  gap: 24px;

  @media (min-width: 768px) {
    margin-top: 24px;
    margin-bottom: 24px;
  }

  @media (min-width: 1200px) {
    flex-direction: row-reverse;
    gap: 16px;
    align-items: start;
  }
`;
