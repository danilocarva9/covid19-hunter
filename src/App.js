import React from 'react';
import Header from './components/header';
import 'bootstrap/dist/css/bootstrap.min.css';
//import './styles.css';
//import 'normalize.css';

import Main from './pages/main';
const App = () => (
  <div className="App">
      <Header/>
      <Main/>
  </div>
);

export default App;
