import { adaptTagToClient } from './tag-adapters';

export const adaptQuotesToClient = (serverQuotes) => {
  const clientQuotes = serverQuotes.map((serverQuote) =>
    adaptQuoteToClient(serverQuote)
  );

  return clientQuotes;
};

export const adaptQuoteToClient = (serverQuote) => {
  const clientQuote = {
    ...serverQuote,
    tags: serverQuote?.tags?.map(({ tag }) => adaptTagToClient(tag)),
  };

  delete clientQuote.localeId;
  delete clientQuote.createdAt;
  !clientQuote.tags && delete clientQuote.tags;

  return clientQuote;
};
