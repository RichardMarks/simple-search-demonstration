import React from 'react';

import { SearchInput } from './SearchInput';
import { RecentSearches } from './RecentSearches';

export const SearchScreen = () => {
  return (
    <>
      <h2>Search Screen</h2>
      <SearchInput />
      <RecentSearches />
    </>
  );
};
