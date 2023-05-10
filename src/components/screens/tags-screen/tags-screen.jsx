import { Container, Main, ScreenTitle, TagsItem, TagsLink, TagsList } from './styled';
import Posts from '@/components/ui/posts/posts';
import { useState } from 'react';
import SelectedPost from '@/components/ui/selected-post/selected-post';
import { useTranslation } from 'next-i18next';
import { AppRoute } from '@/const';

export default function TagsScreen({ posts, tags }) {
  const [selectedPost, setSelectedPost] = useState(null);
  const handlePostClick = (post) => setSelectedPost(post);
  const { t } = useTranslation();

  return (
    <>
      <Container>
        <Main>
          <ScreenTitle>{t('tags')}</ScreenTitle>

          <TagsList>
            {tags?.map((tag) => (
              <TagsItem key={tag.id}>
                <TagsLink
                  href={AppRoute.TagsSelected(tag.slug)}
                >
                  {tag.title}
                </TagsLink>
              </TagsItem>
            ))}
          </TagsList>
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
