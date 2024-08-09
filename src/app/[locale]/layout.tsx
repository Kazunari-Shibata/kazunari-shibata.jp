import type { Metadata } from "next";
import { GoogleTagManager } from '@next/third-parties/google';
import { Roboto_Condensed, Noto_Sans_JP } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/next';
import "@/app/styles/Globals.scss";

const roboto_c = Roboto_Condensed({ subsets: ["latin"], variable: "--font-roboto_c" });
const noto_jp = Noto_Sans_JP({ subsets: ["latin"], variable: "--font-noto_jp", });

export default async function LocaleLayout({
    children,
    params: {locale}
}: Readonly<{
    children: React.ReactNode;
    params: {locale: string};
}>) {
    // Providing all messages to the client
    // side is the easiest way to get started
    const messages = await getMessages();
    return (
        <html lang={locale}>
            <head>
                <title>Kazunari Shibata</title>
                <meta name="description" content="This site is the portfolio site of Kazunari Shibata." />
                <GoogleTagManager gtmId="GTM-K6554JPR" />
                <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon/favicon-16x16.png" />
                <link rel="manifest" href="/images/favicon/site.webmanifest"></link>
                {/* <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" /> */}
            </head>
            <body className={process.env.NODE_ENV === 'development' ? `${roboto_c.className} ${noto_jp.className}` : `${roboto_c.variable} ${noto_jp.variable}`}>
                <NextIntlClientProvider messages={messages}>
                    {children}
                </NextIntlClientProvider>
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    );
}