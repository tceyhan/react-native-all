/* eslint-disable prettier/prettier */
import axios from 'axios';
import {useEffect, useState} from 'react';

function useFetch(url) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const {data: resposeData} = await axios.get(url);
      setData(resposeData);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return {error, loading, data, setData};
}

export default useFetch;
