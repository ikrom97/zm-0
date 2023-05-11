import { adaptQuotesToClient } from '@/adapters/quote-adapters';
import { api } from './api';

export const paginateQuotes = async (locale, page = 1) => {
  const { data } = await api.get(`/api/quotes?locale=${locale}&page=${+page}`);

  return {
    quotes: adaptQuotesToClient(data.quotes),
    lastPage: data.lastPage
  };
};

export const searchQuotes = async (locale, keyword) => {
  const { data } = await api.get(`/api/quotes/search?locale=${locale}&keyword=${keyword}`);

  return adaptQuotesToClient(data);
};
