import nodemailer from "nodemailer";

export async function sendEmail(to: string, html: string) {
    // let testAccount = await nodemailer.createTestAccount();
//     console.log("testAccount: ", testAccount);

    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
            user: "tyzgbto33aodbpce@ethereal.email",
            pass: "8aSs1EdUnV4T4c1ZQJ",
        },
    });

    let info = await transporter.sendMail({
        from: "'Fred Foo' <foo@example.com>",
        to: to,
        subject: "Change password",
        html,
    });

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}