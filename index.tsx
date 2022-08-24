import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { DemoInfo } from './components/DemoInfo';

import { SearchScreen } from './components/SearchScreen';
import { RecentSearchContextProvider } from './state/RecentSearchContextProvider';

import './style.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <>
      <DemoInfo />
      <RecentSearchContextProvider>
        <SearchScreen />
      </RecentSearchContextProvider>
    </>
  </StrictMode>
);
