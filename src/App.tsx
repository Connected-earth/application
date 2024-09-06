/**
 * Project Name: PlantKeeper
 *
 * @created 28-08-2024
 * @file App.tsx
 * @version 1.0.0
 * @see https://github.com/Plant-keeper
 *
 * @authors
 *   - Rafael Dousse
 *   - Eva Ray
 *   - Quentin Surdez
 *   - Rachel Tranchida
 */
import React, { useEffect } from 'react';
import './App.css';
import './index.css';
import AuthProvider from './provider/authProvider';
import Routes from './routes';

function App() {
  // Dynamically add the font link when the component mounts
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.cdnfonts.com/css/jsmath-cmti10';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css?family=Judson';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css?family=Jura';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  // Set the title of the page
  useEffect(() => {
    document.title = 'PlantKeeper';
  }, []);

  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;
