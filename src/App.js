import React from 'react';
import Header from './components/header';
import Routes from './routes';

import 'bootstrap/dist/css/bootstrap.min.css';
//import './styles.css';
//import 'normalize.css';

import Main from './pages/main';
const App = () => (
  <div className="App">
      <Header/>
      <Main/>
      {/* <Routes/> */}
  </div>
);

export default App;
