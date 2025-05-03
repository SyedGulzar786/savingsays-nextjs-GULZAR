// 'use client';

// import { useEffect, useState } from 'react';
// import { useTranslation } from 'react-i18next';
// import { formatPrice } from '@/src/utils/currencyUtils';
// import '../../../i18n'; // Load i18n

// export default function HomePage() {
//   const { t } = useTranslation('common');
//   const [currency, setCurrency] = useState('USD');

//   useEffect(() => {
//     fetch('https://ipapi.co/json/')
//       .then(res => res.json())
//       .then(data => {
//         const map = { US: 'USD', AE: 'AED', FR: 'EUR' };
//         setCurrency(map[data.country] || 'USD');
//       });
//   }, []);

//   return (
//     <main>
//       <h1>{t('greeting')}</h1>
//       <p>{t('price')}: {formatPrice(49.99, currency)}</p>
//     </main>
//   );
// }
'use client';

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { formatPrice } from '@/src/utils/currencyUtils';
import { countrySettings } from '@/src/utils/geoUtils';
import '../../../i18n';

export default function HomePage() {
  const { t } = useTranslation('common');
  const [currency, setCurrency] = useState('USD');

  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => {
        const countryCode = data.country || 'US';
        const settings = countrySettings[countryCode] || { currency: 'USD' };
        setCurrency(settings.currency);
      });
  }, []);

  return (
    <main>
      <h1>{t('greeting')}</h1>
      <p>{t('price')}: {formatPrice(49.99, currency)}</p>
    </main>
  );
}
