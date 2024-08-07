import { NextRequest } from 'next/server';
import { EmailTemplate as EmailTemplate_en } from '@/app/components/Email_en';
import { EmailTemplate as EmailTemplate_jp } from '@/app/components/Email_jp';
import { Resend } from 'resend';
import * as React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData();
        const first_name = formData.get("first_name") as string;
        const last_name = formData.get("last_name") as string;
        const email = formData.get("email") as string;
        const message = (formData.get("message") as string).replace(/\r\n/g, '\n');

        const lang = formData.get("lang") as string;

        const emailConfig = {
            ja: {
                from: '柴田 和成 <noreply@kazunari-shibata.jp>',
                subject: `メッセージを受信しました。 #${Math.floor(1000 + Math.random() * 9000)}`,
                template: EmailTemplate_jp,
            },
            en: {
                from: 'Kazunari Shibata <noreply@kazunari-shibata.jp>',
                subject: `I have received your message. #${Math.floor(1000 + Math.random() * 9000)}`,
                template: EmailTemplate_en,
            }
        };

        const config = emailConfig[lang as keyof typeof emailConfig] || emailConfig.en;

        const { data, error } = await resend.emails.send({
            from: config.from,
            to: ['k11.shibata@gmail.com'],
            subject: config.subject,
            react: config.template({
                first_name: first_name,
                last_name: last_name,
                email: email,
                message: message
            }) as React.ReactElement,
        });

        if (error) {
            return Response.json({
                error,
                message: 'Sorry, Unable to send the message.',
                status: "error"
            }, { status: 500 });
        }

        return Response.json({
            data,
            message: 'Message sent successfully.',
            status: "success"
        });
    } catch (error) {
        return Response.json({
            error,
            message: 'Sorry, Unable to send the message.',
            status: "error"
        }, { status: 500 });
    }
}