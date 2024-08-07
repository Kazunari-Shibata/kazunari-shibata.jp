import { Article } from "@/app/components/Article";
import { useTranslations } from 'next-intl';

export function Works() {
    const t = useTranslations('Works');
    return (
        <section id="section_works" className="mt-32">
            <Article 
                title={t('GASHAPON_OFFICIAL_SITE.title')}
                // description={`Kazunari Shibata worked on the production of BANDAI&apos;s capsule toy information site, &quot;GASHAPON OFFICIAL SITE.&quot;<br /><br />We developed a feature that allows you to easily find out which stores sell the Gashapon you want and how much stock is left from the map on our website.`}
                description={t('GASHAPON_OFFICIAL_SITE.description')}
                url="https://gashapon.jp/"
                image_src="/images/gashapon_official_site.jpg"
                image_width={900}
                image_height={900}
                image_priority={true}
            />
            <Article 
                title={t('GASHAPON_ONLINE.title')}
                // description={`Kazunari Shibata worked on the direction of Bandai&apos;s official Gashapon online shopping site, &quot;Gashapon Online.&quot;<br /><br />&quot;Gashapon Online&quot; is a service that allows you to purchase Gashapon products anytime, 24/7, from your PC or smartphone. You can turn the Gashapon machine and open the capsule to see what you get on the spot. You can also enjoy exclusive online lottery screens and sound effects.`}
                description={t('GASHAPON_ONLINE.description')}
                image_src="/images/gashapon_online.jpg"
                url="https://parks2.bandainamco-am.co.jp/gashapon.html"
                image_width={900}
                image_height={900}
                image_priority={false}
            />
            <Article 
                title={t('McDonalds_Tray_Mat.title')}
                description={t('McDonalds_Tray_Mat.description')}
                image_src="/images/mcdonalds.jpg"
                url="https://prtimes.jp/main/html/rd/p/000000050.000011137.html"
                image_width={900}
                image_height={900}
                image_priority={false}
            />
        </section>
    );
}