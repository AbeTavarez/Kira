import { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Terminal from "./pages/Terminal";
import Home from "./pages/Home";
import SearchBar from "./components/layout/SearchBar";
import Logs from "./components/logs/Logs";
import AddButton from "./components/layout/AddButton";
import AddLogModal from "./components/logs/AddLogModal";
import EditLogModal from "./components/logs/EditLogModal";
import AddTechModal from "./components/techs/AddTechModal";
import TechListModal from "./components/techs/TechListModal";

import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import NavBar from "./components/layout/NavBar";
import NotFound from "./pages/NotFound";
import About from "./pages/About";

const App = () => {
  useEffect(() => {
    // inits MaterializeJS
    M.AutoInit();
  });
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/terminal" component={Terminal} />
        <Route path="/about" component={About}/>
        <Route component={NotFound} />
      </Switch>
    </>
  );
};

export default App;
