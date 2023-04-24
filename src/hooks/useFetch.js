import {useEffect, useState} from 'react';
import axios from 'axios';

const useFetch = (url, bodyParams, category) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const {data: response} =
        bodyParams === true
          ? await axios.post(url, {
              c: category,
            })
          : await axios.get(url);
      setData(response);
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
  return {error, loading, data};
};

export default useFetch;
