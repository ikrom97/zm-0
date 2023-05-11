import { i18n, useTranslation } from 'next-i18next';
import { CloseButton, Input, Label, Modal, ModalTitle, Result, ResultItem, ResultLink, SearchForm } from './styled';
import { useState } from 'react';
import { QuoteService } from '@/services/quote-services';
import CloseIcon from '@/components/icons/close-icon';

export default function SearchModal({ onClose }) {
  const { t } = useTranslation();
  const [keyword, setKeyword] = useState('');
  const [result, setResult] = useState('');

  const handleInputChange = async (evt) => {
    const keyword = evt.target.value;
    setKeyword(keyword);
    const quotes = await QuoteService.search(i18n.language, keyword);
    setResult(quotes);
  };

  return (
    <Modal>
      <ModalTitle>{t('siteSearch')}</ModalTitle>

      <SearchForm>
        <Label aria-label={t('search')}>
          <Input
            placeholder={t('enterKeyword')}
            value={keyword}
            debounceTimeout={300}
            type="search"
            onChange={handleInputChange}
          />
        </Label>

        {result &&
          <Result>
            {result.length === 0 ?
              <ResultItem>
                <ResultLink as="span">{t('noResult')}</ResultLink>
              </ResultItem>
              :
              result.map((quote) => (
                <ResultItem key={quote.id}>
                  <ResultLink as="span">{quote.quote}</ResultLink>
                </ResultItem>
              ))}
          </Result>}
      </SearchForm>

      <CloseButton onClick={() => onClose()}>
        <CloseIcon
          width={20}
          height={20}
        />
      </CloseButton>
    </Modal>
  );
}
