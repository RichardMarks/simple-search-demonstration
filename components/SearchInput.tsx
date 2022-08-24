import React, { useCallback, useState } from 'react';
import { useRecentSearches } from '../state/recentSearchContext';

export const SearchInput = () => {
  const recent = useRecentSearches();
  const [search, setSearch] = useState<string>('');

  const handleSearchChange = useCallback((e) => {
    const value = e.target.value;
    setSearch(value);
  }, []);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Enter') {
        recent.addTerm({
          term: search,
          time: new Date().getTime(),
        });
        setSearch('');
      }
    },
    [search, recent.addTerm]
  );

  return (
    <input
      onKeyDown={handleKeyDown}
      value={search}
      onChange={handleSearchChange}
    />
  );
};
