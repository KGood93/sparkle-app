export const findEntry = (entries=[], entryId) =>
    entries.find(({entryid}) => entryid === entryId)

export const findQuote = (quotes=[], quoteId) =>
    quotes.find(({quoteid}) => quoteid === quoteId)