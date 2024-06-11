import axios from "axios";
import { useEffect, useState } from "react";

export default function useHttpsData<G>(url: string) {
  const [data, setData] = useState<G[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let ignore = false;
    const controller = new AbortController();
    const { signal } = controller;
    setLoading(true);

    axios
      .get<{ results: G[] }>(url, { signal })
      .then(({ data }) => {
        if (!ignore) {
          setData(data.results);
        }
      })
      .finally(() => {
        if (!ignore) {
          setLoading(false);
        }
      });

    return () => {
      controller.abort();
      ignore = true
    };
  }, []);

  return {
    data,
    loading,
    setLoading,
    setData
  };
}
