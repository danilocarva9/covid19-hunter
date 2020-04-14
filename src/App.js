import React from 'react';
import Header from './components/header';

import './styles.css';
import 'normalize.css';
import Main from './pages/main';
const App = () => (
  <div className="App">
      <Header/>
      <Main/>
  </div>
);

export default App;
