import { StyledScreen } from './styled';

export default function HomeScreen({ quotes }) {
  return (
    <StyledScreen>
      {quotes.map(({ id, quote }) => (
        <p key={id}>{quote}</p>
      ))}
    </StyledScreen>
  );
}
