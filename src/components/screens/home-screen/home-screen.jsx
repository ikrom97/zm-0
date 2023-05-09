import QuoteCard from '@/components/ui/quote-card/quote-card';
import { Container, Main, Quotes, QuotesPagination } from './styled';

export default function HomeScreen({ data }) {
  return (
    <Container>
      <Main>
        <Quotes>
          {data.quotes.map((quote) => (
            <QuoteCard
              key={quote.id}
              quote={quote}
            />
          ))}
        </Quotes>

        <QuotesPagination lastPage={data.lastPage} />
      </Main>
    </Container>
  );
}
