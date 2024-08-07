import styles from "@/app/styles/components/Footer.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from 'next-intl';
import DOMPurify from 'isomorphic-dompurify';

export function Footer() {
    const t = useTranslations('Footer');
    
    return (
        <footer className={styles.container}>
            <div className={styles.wrapper}>
                <span>
                    &copy; Aichi Prefectural Police Department. All rights reserved<br />
                    &copy; 2024 McDONALD’S. All Rights Reserved.<br />
                    &copy; BANDAI<br />
                    &copy; 1996 Kazunari Shibata<br />
                </span>
                <ul>
                    <li className={styles.eight}>
                        <Link href="https://8card.net/virtual_cards/9YZs4e0u2wfrsymVCHRTsQ" target="_blank">
                            <Image
                                src="/images/eight_profile_code.png"
                                alt="Eight profile code"
                                width={100}
                                height={100}
                            />
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.instagram.com/kazunari_shibata_/" target="_blank">
                            <Image
                                src="/images/ig_logo.png"
                                alt="Instagram logo"
                                width={50}
                                height={50}
                            />
                        </Link>
                    </li>
                    <li>
                        <Link href="https://github.com/Kazunari-Shibata" target="_blank">
                            <Image
                                src="/images/github-logo.svg"
                                alt="GitHub logo"
                                width={50}
                                height={50}
                            />
                        </Link>
                    </li>
                    <li className={styles.linkedin}>
                        <Link href="https://www.linkedin.com/in/kazunari-shibata-0890172bb/" target="_blank">
                            <Image
                                src="/images/linkedin_logo.webp"
                                alt="Linkedin logo"
                                width={50}
                                height={50}
                            />
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={styles.foot}>
                <p dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(t.raw('gashapon_note'))}} />
                <p>{t('Made in Japan')}</p>
            </div>
            <div className={styles.gradation}></div>
        </footer>
    );
}