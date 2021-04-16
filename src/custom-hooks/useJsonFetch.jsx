import React, { useState, useEffect, useRef } from 'react';

export default function useJsonFetch(url, opts) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await fetch(url, opts);

        if (!response.ok) {
            await setError(response.statusText);
            throw new Error(response.statusText);
        }
        const dataResponse = await response.json();
        setData(dataResponse);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

  }, []);

  return [data, loading, error];
}