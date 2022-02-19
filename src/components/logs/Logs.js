import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LogsItem from './LogsItem';

const Logs = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getLogs();
  }, []);

  const getLogs = async () => {
    setLoading(true);
    const data = await axios.get('/logs');
    setLogs(data.data);
    setLoading(false);
  };

  if (loading) return <h4>Loading...</h4>;

  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">Logs</h4>
        {!loading && logs.length === 0 ? (
          <p className="center">No logs to show</p>
        ) : (
          logs.map((log) => <LogsItem log={log} key={log.id} />)
        )}
      </li>
    </ul>
  );
};

export default Logs;
