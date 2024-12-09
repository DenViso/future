// useFetchDataWithRetry.js
import { useState, useEffect } from "react";
import axios from "axios";

const useFetchDataWithRetry = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      setData(response.data);
      setError(null); // Очищуємо помилку, якщо запит успішний
    } catch (err) {
      console.error("Error fetching data:", err);
      setError(err);
    }
  };

  useEffect(() => {
    fetchData();

    // Якщо виникла помилка, встановлюємо інтервал для повторного запиту кожні 2 хвилини
    if (error) {
      const retryInterval = setInterval(() => {
        fetchData();
      }, 10 * 60 * 1000);
     // 2 хвилини у мілісекундах

      // Очищаємо інтервал при оновленні компонента або успішному запиті
      return () => clearInterval(retryInterval);
    }
  }, [error, url]); // Перезапускаємо useEffect при зміні URL або помилки

  return { data, error };
};

export default useFetchDataWithRetry;
