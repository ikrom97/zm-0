import { useTranslation } from 'next-i18next';
import { Copyright, FooterContainer, Icon, StyledFooter } from './styled';
import dayjs from 'dayjs';
import Text from '@/components/ui/text/text';
import Link from 'next/link';

export default function Footer() {
  const { t } = useTranslation('common');

  return (
    <StyledFooter>
      <FooterContainer>
        <Copyright>
          <Icon />
          <Text>{t('copyright')}<br />{`2017-${dayjs().format('YYYY')}`}</Text>
        </Copyright>

        <Text>
          {t('forFeedback')}<br />
          <Link href="mailto:info@zafarmirzo.com">info@zafarmirzo.com</Link>
        </Text>
      </FooterContainer>
    </StyledFooter>
  );
}
