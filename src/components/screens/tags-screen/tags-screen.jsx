import { Container, Main } from './styled';
import Posts from '@/components/ui/posts/posts';
import { useState } from 'react';
import SelectedPost from '@/components/ui/selected-post/selected-post';

export default function TagsScreen({ posts }) {
  const [selectedPost, setSelectedPost] = useState(null);
  const handlePostClick = (post) => setSelectedPost(post);

  return (
    <>
      <Container>
        <Main>

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
