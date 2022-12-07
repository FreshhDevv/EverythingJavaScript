import React from 'react';
import Sidebar from './components/Sidebar';
import MainRoutes from './Routes';

import './styles.css';

function App() {
  return (
    <div className="app">
      {/** Sidebar */}
      <Sidebar />

      {/** Inner container */}
      <MainRoutes />
    </div>
  );
}

export default App;
