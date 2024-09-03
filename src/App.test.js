import React from 'react';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import App from './App';
 
it('renders without crashing', () => {
  const div = document.createElement('div');
  createRoot(div).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
});
