import { useTranslation } from 'next-i18next';
import { LinksWrapper, ShareButton, SocialLink, Wrapper } from './styled';
import FacebookIcon from '@/components/icons/facebook-icon';
import InstagramIcon from '@/components/icons/instagram-icon';
import TwitterIcon from '@/components/icons/twitter-icon';
import TelegramIcon from '@/components/icons/telegram-icon';
import CopyIcon from '@/components/icons/copy-icon';
import ShareIcon from '@/components/icons/share-icon';

export default function ShareLinks() {
  const { t } = useTranslation('common');

  return (
    <Wrapper>
      <LinksWrapper>
        <SocialLink
          href="#"
          title={t('facebook')}
          icon={<FacebookIcon />}
        />
        <SocialLink
          href="#"
          title={t('instagram')}
          icon={<InstagramIcon />}
        />
        <SocialLink
          href="#"
          title={t('twitter')}
          icon={<TwitterIcon />}
        />
        <SocialLink
          href="#"
          title={t('telegram')}
          icon={<TelegramIcon />}
        />
        <SocialLink
          href="#"
          title={t('copy')}
          icon={<CopyIcon />}
        />
      </LinksWrapper>

      <ShareButton
        type="button"
        title={t('share')}
      >
        <ShareIcon />
      </ShareButton>
    </Wrapper>
  );
}
