import React from "react";

interface Props {
    searchParams: {
        status?: string;
        email?: string;
    };
}

const statusMessages: Record<string, { title: string; message: string; color: string }> = {
    success: {
        title: "Email Verified!",
        message: "Your email has been successfully verified. You can now log in.",
        color: "green",
    },
    failed: {
        title: "Verification Failed",
        message: "There was a problem verifying your email. Please try again.",
        color: "red",
    },
};

export default function VerifyEmailPage({ searchParams }: Props) {
    const { status = "success", email = "" } = searchParams;
    const info = statusMessages[status] || statusMessages["failed"];

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
            <div className="bg-white shadow-lg rounded-xl p-8 max-w-md w-full text-center">
                <div className={`flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-${info.color}-100 mb-4`}>
                    {status === "success" ? (
                        <svg className={`w-8 h-8 text-${info.color}`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                    ) : (
                        <svg className={`w-8 h-8 text-${info.color}`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    )}
                </div>
                <h1 className={`text-2xl font-bold text-${info.color}-700 mb-2`}>{info.title}</h1>
                <p className="text-gray-600 mb-4">{info.message}</p>
                {email && (
                    <div className="mb-4">
                        <span className="text-sm text-gray-500">Email:</span>
                        <div className="text-base font-medium text-gray-800">{email}</div>
                    </div>
                )}
                <a
                    href="/signin"
                    className={`inline-block px-6 py-2 rounded-lg bg-${info.color}-600 text-white font-semibold shadow hover:bg-${info.color} transition`}
                >
                    Go to Signin
                </a>
            </div>
        </div>
    );
}

