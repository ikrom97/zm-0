import { useTranslation } from 'next-i18next';
import { List, ListItem, StyledTags, Tag, TagsTitle } from './styled';
import { AppRoute } from '@/const';

export default function Tags({ tags, currentTag }) {
  const { t } = useTranslation();
  
  return (
    <StyledTags>
      <TagsTitle>{t('tags')}</TagsTitle>

      <List>
        {tags?.map(({ id, slug, title }) => (
          <ListItem key={id}>
            <Tag
              href={AppRoute.TagsSelected(slug)}
              isCurrent={currentTag.id === id}
            >
              {title}
            </Tag>
          </ListItem>
        ))}
      </List>
    </StyledTags>
  );
}
