const emailTemplateStyles = `
    <style>
        body {
            background-color: #f4f4f7;
            margin: 0;
            padding: 0;
            font-family: 'Segoe UI', 'Roboto', Arial, sans-serif;
            color: #333;
        }
        .container {
            max-width: 480px;
            margin: 40px auto;
            background: #fff;
            border-radius: 10px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.07);
            padding: 32px 24px;
        }
        .header {
            text-align: center;
            margin-bottom: 24px;
        }
        .header h1 {
            color: #2563eb;
            font-size: 2rem;
            margin: 0;
        }
        .content {
            font-size: 1rem;
            line-height: 1.6;
            margin-bottom: 32px;
            text-align: center;
        }
        .verify-btn {
            display: inline-block;
            padding: 12px 32px;
            background-color: #2563eb;
            color: #fff !important;
            border-radius: 6px;
            text-decoration: none;
            font-weight: 600;
            font-size: 1rem;
            transition: background 0.2s;
        }
        .verify-btn:hover {
            background-color: #1d4ed8;
        }
        .footer {
            text-align: center;
            color: #888;
            font-size: 0.9rem;
            margin-top: 24px;
        }
    </style>
`;

export function emailTemplate(VERIFICATION_LINK:string) {
    return `
    <html>
        <head>
            ${emailTemplateStyles}
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>Email Verification</h1>
                </div>
                <div class="content">
                    <p>Please click the button below to verify your email address.</p>
                    <a class="verify-btn" href="${VERIFICATION_LINK}">Verify Email</a>
                </div>
                <div class="footer">
                    If you did not request this, you can safely ignore this email.
                </div>
            </div>
        </body>
    </html>
`
};