
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

const rootElement = document.getElementById('root');

if (!rootElement) {
  console.error("Root element not found");
} else {
  const root = ReactDOM.createRoot(rootElement);
  try {
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } catch (error) {
    console.error("Rendering error:", error);
    rootElement.innerHTML = `<div style="padding: 20px; color: white;">App failed to load. Please check console.</div>`;
  }
}
