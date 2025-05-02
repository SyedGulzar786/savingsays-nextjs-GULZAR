"use client"

export const dynamic = 'force-dynamic'

import {createContext, useContext, useEffect, useState} from 'react';

export const VendorContext = createContext({});

export const VendorContextProvider = ({children, isUserLoggedIn = false, apiUrl, vendorKey}) => {

    const [vendorData, setVendorData] = useState({})

    useEffect(() => {
        const getVendor = async () => {
            const response = await fetch(`${apiUrl}/vendors`, {
                method: 'GET',
                headers: {
                    'X-VENDOR-KEY': vendorKey,
                    'Content-Type': 'application/json'
                }
            });
            const {data} = await response.json();
            setVendorData(data);
        }
        getVendor()
    }, [apiUrl]);

    return (
        <VendorContext.Provider value={{vendorData, isUserLoggedIn}}>
            {children}
        </VendorContext.Provider>
    )
}

export const useVendorContext = () => useContext(VendorContext);