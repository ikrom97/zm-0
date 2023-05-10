import { Post, PostImage, StyledPosts } from './styled';

export default function Posts({ posts, onPostClick }) {
  return (
    <StyledPosts>
      {posts.map((post) => (
        <Post
          key={post.id}
          href={`/${post.image}`}
          onClick={(evt) => {
            evt.preventDefault();
            onPostClick(post);
          }}
        >
          <PostImage
            src={`/${post.thumbImage}`}
            width={220}
            height={160}
            alt={post.alternativeText}
          />
        </Post>
      ))}
    </StyledPosts>
  );
}
