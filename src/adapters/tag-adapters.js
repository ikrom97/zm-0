import { adaptQuoteToClient } from './quote-adapters';

export const adaptTagsToClient = (serverTags) => {
  const clientTags = serverTags.map((serverTag) =>
    adaptTagToClient(serverTag)
  );

  return clientTags;
};

export const adaptTagToClient = (serverTag) => {
  const clientTag = {
    ...serverTag,
    quotes: serverTag?.quotes?.map(({ quote }) => adaptQuoteToClient(quote)),
  };

  delete clientTag.localeId;
  delete clientTag.createdAt;
  !clientTag.quotes && delete clientTag.quotes;

  return clientTag;
};
