import { useState, useEffect } from 'react';
import axios from 'axios';
import HomePage from './Page/home';
import { Routes, Route } from 'react-router';
import AboutPage from './Page/aboutPage';
import NotFoundPage from './Page/notFoundPage'
import Header from './components/Hedaer';
import CoinDetailsPage from './Page/CoinDetails';
const API_URL = import.meta.env.VITE_API_URL;


const App = () => {

  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [limit, setLimit] = useState(10);
  const [filter, setFilter] = useState('');
  const [sortBy, setSortBy] = useState('market_cap_desc');

  //fetch api version - promise version
  // function fetchCoins() {
  //   fetch(API_URL)
  //     .then((res) => {
  //       if (!res.ok) throw new Error('failed to fetch data');
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setCoins(data);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       setError(err.message);
  //       setLoading(false);
  //     })
  // }


  //axios get version - async await

  async function getCoins() {
    try {
      const response = await axios.get(`${API_URL}&order=market_cap_desc&per_page=${limit}&page=1&sparkline=false`);
      if (response.status !== 200) throw new Error('failed to fetch data');
      setCoins(response.data);
    }
    catch (error) {
      setError(err.message);
    }
    finally {
      setLoading(false);
    }
  }


  useEffect(() => {
    // fetchCoins();
    getCoins();
  }, [limit])


  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage coins={coins} filter={filter} setFilter={setFilter} limit={limit} setlimit={setLimit} sortBy={sortBy} setSortBy={setSortBy} loading={loading} error={error} />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/coin/:id' element={<CoinDetailsPage />} />
        <Route path='*' element={< NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;