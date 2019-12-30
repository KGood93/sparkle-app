export const findEntry = (entries=[], entryId) =>
    entries.find(entry => entry.id === entryId)