import { useState, useEffect, useCallback } from "react";
import { Crypto } from "../api/types";

export const useCrypto = () => {
  const [cryptos, setCryptos] = useState<Crypto[]>([]);
  const [loading, setLoading] = useState(true);

  const refreshData = useCallback(async () => {
    try {
      const response = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd");
      const data = await response.json();
      setCryptos(data);
    } catch (error) {
      console.error("Fetch error", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refreshData();
    const interval = setInterval(refreshData, 60000);
    return () => clearInterval(interval);
  }, [refreshData]);

  return { cryptos, loading, refreshData };
};