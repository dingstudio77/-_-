
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

const rootElement = document.getElementById('root');

if (!rootElement) {
  console.error("Root element not found");
} else {
  try {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } catch (error) {
    console.error("Critical rendering error:", error);
    rootElement.innerHTML = `
      <div style="padding: 40px; color: white; background: #050505; height: 100vh; font-family: sans-serif; display: flex; align-items: center; justify-content: center; text-align: center;">
        <div>
          <h1 style="color: #8b5cf6; font-size: 24px; margin-bottom: 16px;">어플리케이션 로딩 실패</h1>
          <p style="opacity: 0.6;">콘솔 로그를 확인하거나 페이지를 새로고침 해주세요.</p>
          <button onclick="location.reload()" style="margin-top: 24px; background: #8b5cf6; color: white; border: none; padding: 12px 24px; border-radius: 8px; font-weight: bold; cursor: pointer;">새로고침</button>
        </div>
      </div>
    `;
  }
}
