import QuoteCard from '@/components/ui/quote-card/quote-card';
import { Main, Quotes, Wrapper } from './styled';
import Tags from '@/components/ui/tags/tags';

export default function TagsSelectedScreen({ selectedTag, tags }) {
  return (
    <Wrapper>
      <Tags
        tags={tags}
        currentTag={selectedTag}
      />

      <Main>
        <Quotes>
          {selectedTag?.quotes?.map((quote) => (
            <QuoteCard
              key={quote.id}
              quote={quote}
              currentTag={selectedTag}
            />
          ))}
        </Quotes>
      </Main>
    </Wrapper>
  );
}
