import { AppRoute } from '@/const';
import { Tag, TagList } from './styled';
import TriangleIcon from '@/components/icons/triangle-icon';

export default function Tags({ tags }) {
  return (
    <TagList>
      {tags.map(({ tag }) => (
        <Tag
          key={tag.id}
          href={AppRoute.TagsSelected(tag.slug)}
        >
          <TriangleIcon />
          {tag.title}
        </Tag>
      ))}
    </TagList>
  );
}
