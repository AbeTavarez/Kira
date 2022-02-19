import { useEffect } from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import SearchBar from './components/SearchBar';


const App = () => {
  useEffect(() => {
    // inits MaterializeJS
    M.AutoInit();
  })
  return (
    <div className="App">
     <h1>Hello</h1>
      <SearchBar />
    </div>
  );
}

export default App;
