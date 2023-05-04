import style from './style.module.css';
import Container from "@/components/ui/container/container";
import Logo from "@/components/ui/logo/logo";
import Navigation from "../navigation/navigation";
import Button from '@/components/ui/button/button';
import MenuIcon from '@/components/icons/menu-icon';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import CloseIcon from '@/components/icons/close-icon';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation('common');

  return (
    <header className={style.header}>
      <Container className={style.container}>
        <Logo />

        <Button
          className={style.button}
          title={t('toggleMenu')}
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <CloseIcon width={18} /> : <MenuIcon />}
        </Button>

        <Navigation isOpen={isMenuOpen} />
      </Container>
    </header>
  );
}
