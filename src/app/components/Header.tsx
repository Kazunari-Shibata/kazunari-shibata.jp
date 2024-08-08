import Image from "next/image";
import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';
import { Switcher } from "@/app/components/Switcher";
import styles from "@/app/styles/components/Header.module.scss";

export function Header() {
    const t = useTranslations('Header');
    const lang = t("lang");
    const [isSwitcherVisible, setIsSwitcherVisible] = useState(false);

    const toggleSwitcher = () => {
        setIsSwitcherVisible(!isSwitcherVisible);
    };

    const closeSwitcher = () => {
        setIsSwitcherVisible(false);
    };

    useEffect(() => {
        document.body.classList.toggle('overflow_hidden', isSwitcherVisible);
    }, [isSwitcherVisible]);

    return (
        <>
            <header className={styles.container}>
                <h1>
                    <Image
                        src="/images/logo.svg"
                        alt="KAZUNARI SHIBATA"
                        width={1254}
                        height={100}
                        priority
                    />
                </h1>
                <button className={styles.button} onClick={toggleSwitcher}>
                    <span className="material-symbols-outlined">g_translate</span>
                </button>
            </header>
            <Switcher
                lang={lang}
                is_visible={isSwitcherVisible}
                closeSwitcher={closeSwitcher}
            />
        </>
    );
}