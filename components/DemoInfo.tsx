import React from 'react';

export const DemoInfo = () => {
  return (
    <ol>
      <li>Enter a search term and press the Enter/Return key to submit.</li>
      <li>Observe that the search term is saved in recent searches.</li>
      <li>
        Observe that the recent search terms are persisted if you reload the
        page.
      </li>
      <li>Click the Clear Searches button to clear the recent search terms.</li>
      <li>
        Observe that the recent search terms are gone if you reload the page.
      </li>
    </ol>
  );
};
