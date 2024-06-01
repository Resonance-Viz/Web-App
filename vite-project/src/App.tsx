import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout'; // Adjust the import path accordingly
import ViewPage from './components/ViewPage';
import SubmitPage from './components/SubmitPage';
import axios from 'axios';

interface Id {
  $oid: string;
}

export interface StructuredData {
  _id: Id;
  Name: string;
  Usage: number;
}

export default function App() {
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
        <Layout>
        <Routes>
            <Route path="/" element={<ViewPage data={data} />} />
            <Route path="/submit" Component={SubmitPage} />
        </Routes>
        </Layout>
      </Router>
  );
}
