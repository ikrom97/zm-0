import QuoteCard from '@/components/ui/quote-card/quote-card';
import { Container, Main, Quotes } from './styled';

export default function HomeScreen({ quotes }) {
  return (
    <Container>
      <Main>
        <Quotes>
          {quotes.map((quote) => (
            <QuoteCard
              key={quote.id}
              quote={quote}
            />
          ))}
        </Quotes>
      </Main>
    </Container>
  );
}
