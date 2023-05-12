import { adaptQuoteToClient, adaptQuotesToClient } from '@/adapters/quote-adapters';
import { api } from './api';

export const getQuotes = async (locale) => {
  if (locale) {
    const { data } = await api.get(`/api/quotes?locale=${locale}`);
    return adaptQuotesToClient(data);
  }
  const { data } = await api.get('/api/quotes');
  return adaptQuotesToClient(data);
};

export const getQuoteBySlug = async (slug) => {
  const { data } = await api.get(`/api/quotes/${slug}`);
  return adaptQuoteToClient(data);
};

export const paginateQuotes = async (locale, page = 1) => {
  const { data } = await api.get(`/api/quotes/paginate?locale=${locale}&page=${+page}`);
  return {
    quotes: adaptQuotesToClient(data.quotes),
    lastPage: data.lastPage
  };
};

export const searchQuotes = async (locale, keyword) => {
  const { data } = await api.get(`/api/quotes/search?locale=${locale}&keyword=${keyword}`);
  return adaptQuotesToClient(data);
};
