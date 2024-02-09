import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Header from "@/components/navbar/header";
import {ReactNode} from "react";
import Footer from "@/components/footer";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Fake Mail Finder",
    description: "Find fake email addresses easily.",
};

export default function RootLayout({children}: Readonly<{ children: ReactNode }>) {

    return (
        <html lang="en">
        <body className={inter.className}>
        <Header/>
        {children}
        <Footer/>
        </body>
        </html>
    );
}
