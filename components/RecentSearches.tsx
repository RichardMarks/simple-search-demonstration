import React, { useCallback } from 'react';
import {
  RecentSearchTerm,
  useRecentSearches,
} from '../state/recentSearchContext';

export const RecentSearches = () => {
  const recent = useRecentSearches();

  const handleClearClicked = useCallback(() => {
    recent.clearTerms();
  }, [recent.clearTerms]);

  return (
    <>
      <h3>Recent Searches: ({recent.terms.length})</h3>
      {recent.terms.map((term: RecentSearchTerm) => {
        return <div key={term.time.toString()}>{term.term}</div>;
      })}
      <button onClick={handleClearClicked}>Clear Searches</button>
    </>
  );
};
