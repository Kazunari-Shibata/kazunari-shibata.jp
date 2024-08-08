import styles from "@/app/styles/components/Swicher.module.scss";
import Link from "next/link";
import { useTranslations } from 'next-intl';

interface SwicherProps {
    lang: string;
    isSwitcherVisible: boolean;
    closeSwitcher: () => void;
}

export function Switcher({ lang, isSwitcherVisible, closeSwitcher }: SwicherProps) {
    const t = useTranslations('Header');

    return (
        <div className={styles.container}>
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
        </div>
    );
}