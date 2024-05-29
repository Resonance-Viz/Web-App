import { useEffect, useState } from 'react';
import axios from 'axios';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ViewPage from './components/ViewPage';
import SubmitPage from './components/SubmitPage';

interface Id {
  $oid: string;
}

export interface StructuredData {
  _id: Id;
  Name: string;
  Usage: number;
}


export default function BasicTabs() {
  const [data, setData] = useState<StructuredData[]>([]);

  useEffect(() => {
    axios.get('http://52.54.130.135:443/formatted-data')
      .then(response => {
        setData(response.data);
      })
      .catch(e => {
        console.error(e);
      });
  }, []);

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<ViewPage data={data} />} />
          <Route path="/submit" Component={SubmitPage} />
        </Routes>
      </div>
    </Router>
  );
}
