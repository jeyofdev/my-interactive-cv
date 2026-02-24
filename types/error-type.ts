export type BaseErrorCode =
	| "DATABASE_ERROR"
	| "VALIDATION_ERROR"
	| "CONNECTION_ERROR"
	| "TIMEOUT_ERROR"
	| "UNKNOWN_ERROR"
	| "NOT_FOUND"
	| "INVALID_ID"
	| "UNAUTHORIZED"
	| "FORBIDDEN";

/**
 * Generic error type.
 *
 * @example
 * type ResumeErrorCode = BaseErrorCode | "PROFILE_NOT_FOUND" | "PROFILE_LOCKED";
 * type ResumeError = AppError<ResumeErrorCode>;
 */
export type AppError<T extends string = BaseErrorCode> = {
	name: string;
	message: string;
	statusCode: number;
	code: T;
	cause?: unknown;
};

/**
 * Configuration options for the generic Prisma error handler.
 */
export type PrismaErrorHandlerOptions<T extends string> = {
	codes: {
		notFound: T;
		invalidId: T;
		timeout: T;
		database: T;
		validation: T;
		connection: T;
		unknown: T;
	};
	entityId?: string;
	entityName?: string;
};

/**
 * * Checks whether an unknown value is a valid {@link AppError}.
 *
 * @param value
 * @returns
 */
export const isAppError = <T extends string>(value: unknown): value is AppError<T> =>
	typeof value === "object" && value !== null && "code" in value && "statusCode" in value && "message" in value;

/**
 * * Checks whether an `AppError` carries a specific error code.
 *
 * @param error
 * @param code
 * @returns
 */
export const hasErrorCode = <T extends string>(error: AppError<T>, code: T): boolean => error.code === code;

/**
 * Converts an AppError into a native Error and throw.
 *
 * @param error
 */
export const throwAppError = <T extends string>(error: AppError<T>): never => {
	const err = new Error(error.message);
	err.name = error.name;
	Object.assign(err, error);
	throw err;
};
