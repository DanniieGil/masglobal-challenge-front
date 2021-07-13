import React, { createContext, useState } from 'react'

export const DataContext = createContext();
export const DataProvider = ({ children }) => {

  const [movies, setMovies] = useState([]);

  return (
    <DataContext.Provider value={
      {
        movies,
        setMovies,
      }
    }>
      {children}
    </DataContext.Provider>
  )
}