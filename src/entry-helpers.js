export const findEntry = (entries=[], entryId) =>
    entries.find(({entryid}) => entryid === entryId)