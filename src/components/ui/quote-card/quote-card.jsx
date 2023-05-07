import ShareLinks from './share-links/share-links';
import { Bottom, Card, Quote, Top } from './styled';
import Tags from './tags/tags';

export default function QuoteCard({ quote }) {
  return (
    <Card>
      <Top>
        <Quote>{quote.quote}</Quote>
        <Tags tags={quote.tags} />
      </Top>

      <Bottom>
        <ShareLinks />
      </Bottom>
    </Card>
  );
}
