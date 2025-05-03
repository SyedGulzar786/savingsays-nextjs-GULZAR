"use client"
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import i18n from '@/src/utils/initI18n';
import { useUserCurrency } from '@/src/hooks/useUserCurrency';
import { formatPrice } from '@/src/utils/currencyUtils';

import React from 'react'
import AboutUs from "@/src/components/TwoColumn/RightContent/AboutUs";
import PopularCategories from '@/src/components/PopularCategories/PopularCategories';
import PopularStores from '@/src/components/PopularStores/PopularStores';

export default function AboutPage() {
    const { t } = useTranslation('common');

    // 👇 Change i18n language based on locale route param
    useEffect(() => {
        if (params?.locale) {
            i18n.changeLanguage(params.locale);
        }
    }, [params?.locale]);

    const currency = useUserCurrency();
    return (
        <div>
            <main>
                <h1>{t('greeting')}</h1>
                <p>{t('price')}: {formatPrice(99.99, currency)}</p>
            </main>

            <div className="container my-5 about-page">
                <div className="row">


                    {/* Second Column (9 columns) */}
                    <div className="col-md-12">


                        <AboutUs />


                    </div>

                </div>

            </div>
            {/* 
            <PopularCategories/> */}

            <PopularStores />


        </div>
    )
}
