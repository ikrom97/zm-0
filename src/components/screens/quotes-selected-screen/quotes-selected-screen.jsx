import QuoteCard from '@/components/ui/quote-card/quote-card';
import { Main } from './styled';
import Tags from '@/components/ui/tags/tags';

export default function QuotesSelectedScreen({ selectedQuote, tags }) {
  return (
    <Main>
      <QuoteCard quote={selectedQuote} />
      
      <Tags
        tags={tags}
      />
    </Main>
  );
};
