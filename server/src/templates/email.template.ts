export function emailTemplate(verificationLink:string) {
    return `
            <html>
                <body>
                    <h1>Email verification</h1>
                    <p>Click <a href="${verificationLink}">here</a> to verify your email.</p>
                </body>
            </html>
        `
};