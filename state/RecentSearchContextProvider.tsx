import React from 'react';
import { RecentSearchContext } from './recentSearchContext';
import { useRecentSearchStorage } from './recentSearchStorage';

interface Props {
  children: React.ReactNode;
}

export const RecentSearchContextProvider = ({ children }: Props) => {
  const contextValue = useRecentSearchStorage();
  return (
    <RecentSearchContext.Provider value={contextValue}>
      {children}
    </RecentSearchContext.Provider>
  );
};
