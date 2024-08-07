
"use client";
import { Header } from "@/app/components/Header";
import { Works } from "@/app/components/Works";
import { Contact } from "@/app/components/Contact";
import { Footer } from "@/app/components/Footer";

export default function Home() {
    return (
        <main>
            <Header />
            <div id="inner">
                <Works />
                <Contact />
            </div>
            <Footer />
        </main>
    );
}