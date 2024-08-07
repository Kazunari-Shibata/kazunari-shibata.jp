import { useState } from 'react';
import styles from "@/app/styles/components/Header.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from 'next-intl';

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

    return (
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
            {isSwitcherVisible && (
                <div className={styles.switcher} onClick={closeSwitcher}>
                    <div className={styles.wrapper}>
                        <div className={styles.head}>
                            <h4>{t("Switching languages")}</h4>
                            <button onClick={closeSwitcher}>
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </div>
                        <div className={styles.body}>
                            <Link href="/en" className={lang === 'en' ? styles.active : ''}>
                                <div>English<span>🇨🇦</span></div>
                            </Link>
                            <Link href="/ja" className={lang === 'ja' ? styles.active : ''}>
                                <div>日本語<span>🇯🇵</span></div>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}