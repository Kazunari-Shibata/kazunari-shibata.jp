import styles from "@/app/styles/components/Button.module.scss";
import { useTranslations } from 'next-intl';

type ButtonProps = {
    message: string;
};

export function Button({message}: ButtonProps) {
    const t = useTranslations('Button');
    return (
        <button className={styles.container} onClick={() => alert(message)}>
            <span>{t('Read more')}</span>
        </button>
    );
}