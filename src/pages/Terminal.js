import React, { useEffect } from 'react'
import SearchBar from "../components/layout/SearchBar";
import Logs from "../components/logs/Logs";
import AddButton from "../components/layout/AddButton";
import AddLogModal from "../components/logs/AddLogModal";
import EditLogModal from "../components/logs/EditLogModal";
import AddTechModal from "../components/techs/AddTechModal";
import TechListModal from "../components/techs/TechListModal";

const Terminal = () => {
  return (
    <>
      <SearchBar />
        <div className="container">
          <AddButton />
          <AddLogModal />
          <EditLogModal />
          <AddTechModal />
          <TechListModal />
          <Logs />
        </div> 
    </>
  )
}

export default Terminal
