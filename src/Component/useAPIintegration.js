import { useState, useEffect } from "react";
import axios from "axios";
function useAPIintgration(url) {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchAPI();
  }, [url]);
  return {
    data,
    error,
    loading,
  };
}
export default useAPIintgration;
