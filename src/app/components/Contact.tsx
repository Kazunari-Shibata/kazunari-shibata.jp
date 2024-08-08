import React, { useState } from 'react';
import styles from "@/app/styles/components/Contact.module.scss";
import { Message } from '@/app/components/Message';
import { useTranslations } from 'next-intl';

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
                    <span className="material-symbols-outlined">alternate_email</span>
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
            <Message
                status="error" // error
                message="Sorry, Unable to send the message." // Sorry, Unable to send the message.
                onClose={handleCloseMessage}
            />
        </>
    );
}
