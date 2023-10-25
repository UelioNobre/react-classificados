import React, { createContext, useState } from 'react'
import api from '../api'

export const CategoriesContext = createContext([]);
export function CategoriesProvider({ children }) {
  const [categories, setCategories] = useState([]);

  async function fetchCategories() {
    const response = await api.categories.findCategories();
    setCategories(response);
  }

  return (
    <CategoriesContext.Provider value={{ categories, fetchCategories }}>
      {children}
    </CategoriesContext.Provider>
  )
}