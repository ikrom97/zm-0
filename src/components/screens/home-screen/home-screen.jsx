import QuoteCard from '@/components/ui/quote-card/quote-card';
import { Container, Main, Quotes, QuotesPagination } from './styled';
import Posts from '@/components/ui/posts/posts';
import { useState } from 'react';
import SelectedPost from '@/components/ui/selected-post/selected-post';

export default function HomeScreen({ quotesPagination, posts }) {
  const [selectedPost, setSelectedPost] = useState(null);
  const handlePostClick = (post) => setSelectedPost(post);
  const { quotes, lastPage } = quotesPagination;

  return (
    <>
      <Container>
        <Main>
          <Quotes>
            {quotes?.map((quote) => (
              <QuoteCard
                key={quote.id}
                quote={quote}
              />
            ))}
          </Quotes>

          {lastPage > 10 &&
            <QuotesPagination lastPage={lastPage} />
          }
        </Main>

        <Posts
          posts={posts}
          onPostClick={handlePostClick}
        />
      </Container>

      {selectedPost &&
        <SelectedPost
          post={selectedPost}
          onClose={() => setSelectedPost(null)}
        />}
    </>
  );
}
