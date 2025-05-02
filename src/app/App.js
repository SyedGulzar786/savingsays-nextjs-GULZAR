"use client";

import Header from "@/src/components/Header/Header";
import Footer from "@/src/components/Footer/Footer";
import {usePathname} from "next/navigation";
import NextTopLoader from "nextjs-toploader";

export default function App({children}) {
    const pathname = usePathname()

    return (
        <>
            <NextTopLoader/>
            {!pathname.startsWith('/stores') &&
                <Header/>
            }
            {children}
            <Footer/>
        </>
    )
}