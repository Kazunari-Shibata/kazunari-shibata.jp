import styles from "@/app/styles/components/Header.module.scss";
import { Switcher } from "@/app/components/Switcher";
import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';
import Image from "next/image";

export function Header() {
    const t = useTranslations('Header');
    const lang = t("lang");
    const [isSwitcherVisible, setIsSwitcherVisible] = useState(false);
    const [isBodyHidden, setIsBodyHidden] = useState(false);

    const toggleSwitcher = () => {
        setIsSwitcherVisible(!isSwitcherVisible);
        setIsBodyHidden(!isBodyHidden);
    };

    const closeSwitcher = () => {
        setIsSwitcherVisible(false);
        setIsBodyHidden(false);
    };

    useEffect(() => {
        document.body.classList.toggle('overflow_hidden', isBodyHidden);
    }, [isBodyHidden]);

    return (
        <>
            <header className={styles.container}>
                <h1>
                    <Image
                        src="/images/Header_logo.svg"
                        alt="KAZUNARI SHIBATA logo"
                        width={1254}
                        height={100}
                        priority
                    />
                </h1>
                <button className={styles.button} onClick={toggleSwitcher}>
                    {/* <span className="material-symbols-outlined">g_translate</span> */}
                    <Image
                        src="/images/Header_icon_lang.svg"
                        alt="Translate button icon"
                        width={33}
                        height={33}
                        priority
                    />
                </button>
            </header>
            <Switcher
                lang={lang}
                isSwitcherVisible={isSwitcherVisible}
                closeSwitcher={closeSwitcher}
            />
        </>
    );
}