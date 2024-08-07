import Image from "next/image";
import Link from "next/link";
import styles from "@/app/styles/components/Article.module.scss";
import { useTranslations } from 'next-intl';

export function Article(data: any) {
    const t = useTranslations('Article');
    return (
        <article className={ styles.container }>
            <div className={ styles.image }>
                <Image
                    src={ data.image_src }
                    alt={ data.title }
                    width={ data.image_width }
                    height={ data.image_height }
                    priority={ data.image_priority }
                />
            </div>
            <div className={ styles.texts }>
                <h3>{ data.title }</h3>
                <p dangerouslySetInnerHTML={{ __html: data.description }} />
            </div>
            <div className={styles.button}>
                <Link href={ data.url } target="_blank">
                    <span>{t('See more')}</span>
                </Link>
            </div>
        </article>
    );
}