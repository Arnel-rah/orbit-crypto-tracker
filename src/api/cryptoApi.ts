const BASE_URL = "https://api.coingecko.com/api/v3";

export const fetchCryptos = async (currency = "usd") => {
  const response = await fetch(
    `${BASE_URL}/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=50&page=1`
  );
  if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
  return response.json();
};

export const fetchCryptoById = async (id: string) => {
  const response = await fetch(`${BASE_URL}/coins/${id}`);
  if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
  return response.json();
};