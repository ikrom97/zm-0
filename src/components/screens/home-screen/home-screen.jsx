import QuoteCard from '@/components/ui/quote-card/quote-card';
import { Container, Main, Quotes, QuotesPagination } from './styled';
import Posts from '@/components/ui/posts/posts';
import { useState } from 'react';
import SelectedPost from '@/components/ui/selected-post/selected-post';

export default function HomeScreen({ data, posts }) {
  const [selectedPost, setSelectedPost] = useState(null);
  const handlePostClick = (post) => setSelectedPost(post);

  return (
    <>
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

          {data.lastPage > 10 &&
            <QuotesPagination lastPage={data.lastPage} />
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
