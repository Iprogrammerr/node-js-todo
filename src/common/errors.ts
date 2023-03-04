export class AppError extends Error {
    constructor(message: string) {
        super(message);
    }
}

export class ValidationError extends Error {
    constructor(message: string) {
        super(message);
    }
}