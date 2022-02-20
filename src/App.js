import { useEffect } from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import SearchBar from './components/layout/SearchBar';
import Logs from './components/logs/Logs';
import AddButton from './components/layout/AddButton';
import AddLogModal from './components/logs/AddLogModal';

const App = () => {
  useEffect(() => {
    // inits MaterializeJS
    M.AutoInit();
  });
  return (
    <>
      <SearchBar />
      <AddButton />
      <AddLogModal/>
      <Logs />
    </>
  );
};

export default App;
