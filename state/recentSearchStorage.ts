import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { RecentSearchTerm } from './recentSearchContext';

export const STORAGE_KEY = 'RECENT_SEARCH_TERMS';

export function fetchFromStorage(
  checkCanSetState: () => boolean,
  setState: React.Dispatch<React.SetStateAction<RecentSearchTerm[]>>
): void {
  let terms: RecentSearchTerm[] = [];
  try {
    const content = window.localStorage.getItem(STORAGE_KEY);
    if (content) {
      terms = JSON.parse(content);
    } else {
      terms = [];
    }
  } catch (err) {
    terms = [];
  }

  if (checkCanSetState()) {
    setState(terms);
  }
}

export function updateStorage(terms: RecentSearchTerm[]): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(terms));
  } catch (err) {}
}

export const useRecentSearchStorage = () => {
  const [terms, setTerms] = useState<RecentSearchTerm[]>([]);

  useEffect(() => {
    let dismounted = false;
    fetchFromStorage(() => !dismounted, setTerms);
    return () => {
      dismounted = true;
    };
  }, []);

  const addTerm = useCallback(
    (term: RecentSearchTerm) => {
      const nextTerms: RecentSearchTerm[] = [...terms, term];
      updateStorage(nextTerms);
      setTerms(nextTerms);
    },
    [terms]
  );

  const clearTerms = useCallback(() => {
    updateStorage([]);
    setTerms([]);
  }, []);

  const storage = useMemo(
    () => ({
      terms,
      addTerm,
      clearTerms,
    }),
    [terms, addTerm, clearTerms]
  );

  return storage;
};
