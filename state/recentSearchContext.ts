import { createContext, useContext } from 'react';

export interface RecentSearchTerm {
  time: number;
  term: string;
}

export interface RecentSearch {
  terms: RecentSearchTerm[];
  addTerm: (term: RecentSearchTerm) => void;
  clearTerms: () => void;
}

export const INITIAL_STATE: RecentSearch = {
  terms: [],
  addTerm: () => {},
  clearTerms: () => {},
};

export const RecentSearchContext = createContext<RecentSearch>(INITIAL_STATE);

export const useRecentSearches = () => useContext(RecentSearchContext);
