import { useEffect, useState } from "react";

function useCurrecncyInfo(currency) {
  const [data, setData] = useState({});
  // useEffect(() => {
  //     fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
  //     .then(res => res.json())
  //     .then(data => setCurrecncyInfo(data))
  // }, [])
  // return [currecncyInfo];

  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-02/v1/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => setData(res[currency]));
  }, [currency]);
  return data;
}

export default useCurrecncyInfo;
