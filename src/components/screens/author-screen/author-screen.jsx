import { AuhtorDetail, Author, AuthorImage, AuthorName, AuthorQuote, Screen, ScreenTitle } from './styled';
import { useTranslation } from 'next-i18next';
import { AppRoute } from '@/const';
import Button from '@/components/ui/button/button';

export default function AuthorScreen() {
  const { t } = useTranslation();
  return (
    <Screen as="main">
      <Author>
        <AuthorImage
          src="/images/author.jpg"
          width={419}
          height={421}
          alt={t('authorName')}
        />
        <AuthorQuote>{t('authorQuote')}</AuthorQuote>
      </Author>

      <ScreenTitle>{t('authorTitle')}</ScreenTitle>
      <AuthorName>{t('authorName')}</AuthorName>

      <AuhtorDetail>{t('authorDescription')}</AuhtorDetail>
      <AuhtorDetail>{t('authorBirthday')}</AuhtorDetail>
      <AuhtorDetail>
        {t('fromMyCreativity')}
        <Button href={AppRoute.Home}>{t('thoughts')}</Button>
      </AuhtorDetail>
    </Screen>
  );
}
