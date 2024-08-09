import styles from "@/app/styles/components/Contact.module.scss";
import { Message } from '@/app/components/Message';
import { useTranslations } from 'next-intl';
import React, { useState } from 'react';
import Image from "next/image";

export function Contact() {
    const t = useTranslations('Contact');
    
    const [status, setStatus] = useState('');
    const [message, setMessage] = useState('');
    const [showMessage, setShowMessage] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false); // Add isSubmitting state

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSubmitting(true); // Set isSubmitting to true when form is submitted
        const form = event.currentTarget;
        const formData = new FormData(form);

        const response = await fetch('/api/send', {
            method: 'POST',
            body: formData,
        });

        const result = await response.json();
        console.log(result);
        
        setStatus(result.status);
        setMessage(result.message);
        setShowMessage(true);
        setIsSubmitting(false); // Reset isSubmitting after response

        //  フォームのリセット
        form.reset();
    };

    const handleCloseMessage = () => {
        setShowMessage(false);
        setStatus('');
        setMessage('');
    };

    function Submit() {
        return (
            <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? t('Submitting') : t('Submit')}
            </button>
        );
    }

    return (
        <>
            <section className={styles.container}>
                <div className={styles.title}>
                    {/* <span className="material-symbols-outlined">alternate_email</span> */}
                    {/* <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z"/></svg> */}
                    <Image
                        src="/images/Contact_icon.svg"
                        alt="Icon of Contact form"
                        width={24}
                        height={24}
                    />
                    <h2>{t('CONTACT ME')}</h2>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className={styles.inner}>
                        <div className={styles.wrapper}>
                            <label htmlFor="first_name">{t('First Name')}</label>
                            <input
                                type="text"
                                name="first_name"
                                placeholder={t('First Name_placeholder')}
                                required 
                            />
                        </div>
                        <div className={styles.wrapper}>
                            <label htmlFor="last_name">{t('Last Name')}</label>
                            <input
                                type="text"
                                name="last_name"
                                placeholder={t('Last Name_placeholder')}
                                required 
                            />
                        </div>
                    </div>
                    <div className={styles.wrapper}>
                        <label htmlFor="email">{t('E-mail')}</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="sample@kazunari-shibata.jp"
                            required
                        />
                    </div>
                    <div className={styles.wrapper}>
                        <label htmlFor="message">{t('Message')}</label>
                        <textarea
                            name="message"
                            rows={4}
                            placeholder={t('Message_placeholder')}
                            required
                        />
                    </div>
                    <Submit />
                    <input type="hidden" name="lang" value={t('lang')} />
                </form>
            </section>
            {showMessage && (
                <Message
                    status={status}
                    message={message}
                    onClose={handleCloseMessage}
                />
            )}
            {/* <Message
                status="success" // error
                message="Message sent successfully." // Sorry, Unable to send the message.
                onClose={handleCloseMessage}
            /> */}
        </>
    );
}
