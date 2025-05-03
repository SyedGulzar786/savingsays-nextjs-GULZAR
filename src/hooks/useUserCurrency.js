// /src/hooks/useUserCurrency.js
import { useEffect, useState } from 'react';
import { countrySettings } from '@/src/utils/geoUtils';

export function useUserCurrency(defaultCurrency = 'USD') {
  const [currency, setCurrency] = useState(defaultCurrency);

  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => {
        const settings = countrySettings[data.country] || { currency: defaultCurrency };
        setCurrency(settings.currency);
      });
  }, [defaultCurrency]);

  return currency;
}
