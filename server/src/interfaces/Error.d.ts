export interface CreateError extends Error {
    statusCode:number,
    status: string
}