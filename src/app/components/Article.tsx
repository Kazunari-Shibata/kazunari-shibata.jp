import Image from "next/image";
import styles from "@/app/styles/components/Article.module.scss";
import { Button } from "@/app/components/Button";

export function Article(data: any) {
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
            <Button message="I'm tired" />
        </article>
    );
}