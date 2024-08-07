import styles from "@/app/styles/components/Footer.module.scss";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
    return (
        <footer className={styles.container}>
            <span>
                &copy; 1996 Kazunari Shibata<br />
                Made in Japan 🇯🇵
            </span>
            <ul>
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
            </ul>
        </footer>
    );
}