import React from 'react'

export default React.createContext({
    entry: [],
    quotes: [],
    addEntry: () => {},
    deleteEntry: () => {},
    fetchEntry: () => {},
    setNewId: () => {}
})