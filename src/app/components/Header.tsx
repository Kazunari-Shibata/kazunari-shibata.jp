
import styles from "@/app/styles/components/Header.module.scss";
import Image from "next/image";

export function Header() {
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
                {/* KAZUNARI SHIBATA */}
            </h1>
            <button onClick={() => alert('This is just a decoration')}>
                <span className="material-symbols-outlined">g_translate</span>
            </button>
        </header>
    );
}