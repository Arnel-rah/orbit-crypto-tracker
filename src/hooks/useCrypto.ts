import { useState, useEffect, useCallback } from "react";
import type { Crypto } from "../api/types";
import { fetchCryptos } from "../api/cryptoApi";

export const useCrypto = () => {
  const [cryptos, setCryptos] = useState<Crypto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const refreshData = useCallback(async () => {
    try {
      setError(null);
      const data = await fetchCryptos();
      setCryptos(data);
    } catch (err) {
      console.error("Fetch error", err);
      setError("Impossible de récupérer les données.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refreshData();
    const interval = setInterval(refreshData, 60000);
    return () => clearInterval(interval);
  }, [refreshData]);

  return { cryptos, loading, error, refreshData };
};