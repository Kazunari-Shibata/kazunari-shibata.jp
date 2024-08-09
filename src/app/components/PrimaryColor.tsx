import styles from "@/app/styles/components/PrimaryColor.module.scss";
// import { useTranslations } from 'next-intl';

export function PrimaryColor() {
    // const t = useTranslations('Footer');
    
    return (
        <div className={styles.container}>
            <span className={styles.circle}></span>
            <p>#745399<span></span><span>:</span><span>Edomurasaki</span><span className={styles.ja}>江戸紫</span><span className={styles.ja}>えどむらさき</span></p>
            {/* R:116 G:83 B:153 C:66% M:75% Y:13% K:0% */}
        </div>
    );
}