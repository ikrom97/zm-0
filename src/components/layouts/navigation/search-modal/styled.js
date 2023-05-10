import Title from '@/components/ui/title/title';
import Link from 'next/link';
import { DebounceInput } from 'react-debounce-input';
import styled from 'styled-components';

export const Modal = styled.dialog`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  margin: 0;
  padding: 0;
  background-color: ${({ theme }) => theme.primary};
  width: 100%;
  height: 100vh;

  @media (min-width: 768px) {
    padding-top: 16vh;
  }
`;

export const ModalTitle = styled(Title)`
  padding: 16px 24px;
  text-align: center;
`;

export const SearchForm = styled.form`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.white};
  width: 100%;
  flex-grow: 1;
  border-radius: 8px 8px 0 0;
  padding: 16px;
  gap: 8px;
  max-width: 560px;
  min-height: 64px;

  @media (min-width: 768px) {
    flex-grow: 0;
    border-radius: 8px;
    padding: 16px 24px;
  }
`;

export const Label = styled.label`
  display: flex;
  width: 100%;
`;

export const Input = styled(DebounceInput)`
  display: flex;
  width: 100%;
  border: none;
  padding: 0;
  color: ${({ theme }) => theme.primary};
  font-size: 16px;
  padding-bottom: 4px;
  border-bottom: 1px solid ${({ theme }) => theme.gray};
  transition: 0.3s;

  &::placeholder {
    color: ${({ theme }) => theme.lightPrimary};
  }

  &:focus {
    outline: none;
    border-bottom: 1px solid ${({ theme }) => theme.secondary};
  }
`;

export const Result = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.gray};
`;

export const ResultItem = styled.li`
  display: flex;
`;

export const ResultLink = styled(Link)`
  text-decoration: none;
  padding: 4px 0;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

export const CloseButton = styled.button.attrs({
  type: 'button',
})`
  border: none;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  width: 40px;
  height: 40px;
  background-color: transparent;
  color: ${({ theme }) => theme.secondary};
  margin: 4px;
  cursor: pointer;
`;
