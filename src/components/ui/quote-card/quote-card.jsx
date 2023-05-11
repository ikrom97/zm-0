import { useState } from 'react';
import ShareLinks from './share-links/share-links';
import { Bottom, Card, Hash, Quote, ToggleTags, Top } from './styled';
import Tags from './tags/tags';
import { useTranslation } from 'next-i18next';
import { AppRoute } from '@/const';

export default function QuoteCard(props) {
  const { slug, quote, tags } = props.quote;
  const [areTagsShown, setAreTagsShown] = useState(false);
  const { t } = useTranslation();

  return (
    <Card>
      <Hash href={AppRoute.ThoughtsSelected(slug)}>#{slug}</Hash>
      <Top>
        <Quote>{quote}</Quote>
        <Tags
          tags={areTagsShown ? tags : tags.slice(0, 3)}
          currentTag={props?.currentTag}
        />
      </Top>

      <Bottom>
        <ToggleTags onClick={() => setAreTagsShown(!areTagsShown)}>
          {areTagsShown ? t('hideTags') : `${t('seeAllTags')} ${tags.length - 3}`}
        </ToggleTags>
        <ShareLinks />
      </Bottom>
    </Card>
  );
}
