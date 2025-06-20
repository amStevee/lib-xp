export function exponentialBackoff(
    attempt:number,
    baseDalay:number,
    jitterFactor:number
):number {
    const exponential = baseDalay * 2 ** (attempt - 1);
    // Desynchronize the clients
    const jitter = exponential * jitterFactor * Math.random();

    return exponential + jitter;
}

export function isRetryableError(error:any): boolean {
    // Classify retryable errors (network issues, timeouts, 5xx errors);

    return (
        error.code === 'ETIMEDOUT' ||
        error.code === 'ECONNRESET' ||
        (error.response?.status >= 500 && error.response?.status < 600)
    );
}

export function delayExecution(ms:number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}