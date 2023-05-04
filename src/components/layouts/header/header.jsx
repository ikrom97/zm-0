import Logo from "@/components/ui/logo/logo";
import Navigation from "../navigation/navigation";
import MenuIcon from '@/components/icons/menu-icon';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import CloseIcon from '@/components/icons/close-icon';
import { HeaderContainer, MenuToggler, StyledHeader } from './styled';

export default function Header() {
  const [isMenuShown, setIsMenuShown] = useState(false);
  const { t } = useTranslation('common');

  return (
    <StyledHeader>
      <HeaderContainer>
        <Logo />

        <MenuToggler
          title={t('toggleMenu')}
          onClick={() => setIsMenuShown(!isMenuShown)}
        >
          {isMenuShown ? <CloseIcon width={18} /> : <MenuIcon />}
        </MenuToggler>

        <Navigation isShown={isMenuShown} />
      </HeaderContainer>
    </StyledHeader>
  );
}
