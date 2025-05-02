// import localFont from "next/font/local";
import {Poppins} from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.min.css'
import "./globals.css";
import './block-ui.css'
import {VendorContextProvider} from "@/src/app/vendor-provider";
import {cookies} from "next/headers";
import App from "./App";
const poppins = Poppins({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    display: 'swap'
})

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata = {
    // title: "CouponMist",
    // description: "",
    icons: {
        icon: {
            url: "/favicon.webp", type: "image/webp",
        },
    }
};

export default async function RootLayout({children}) {
    const cookieKey = `${process.env.APP_NAME.toLowerCase()}_session`;
    const session = (await cookies()).has(cookieKey)

    return (
        <html lang="en">
        <body suppressHydrationWarning={true} className={poppins.className}>
        <VendorContextProvider
            isUserLoggedIn={session}
            apiUrl={process.env.API_URL}
            vendorKey={process.env.VENDOR_KEY}
        >
            <App>
                {children}
            </App>
        </VendorContextProvider>
        </body>
        </html>
    );
}
