import { AppRoute } from '@/const';
import { Tag, TagList } from './styled';
import TriangleIcon from '@/components/icons/triangle-icon';

export default function Tags({ tags, currentTag }) {
  return (
    <TagList>
      {tags?.map(({ id, slug, title }) => (
        <Tag
          key={id}
          href={AppRoute.TagsSelected(slug)}
          isCurrent={currentTag?.id === id}
        >
          <TriangleIcon />
          {title}
        </Tag>
      ))}
    </TagList>
  );
}
