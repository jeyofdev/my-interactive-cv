/**
 * Generic, flexible error system.
 * Supports domain-specific error types (Resume, Profile, etc.) via generics.
 */

import { Prisma } from "@/prisma/generated/prisma/client";
import { AppError, BaseErrorCode, PrismaErrorHandlerOptions } from "@/types/error-type";

/**
 * build any AppError manually
 *
 * @param name
 * @param message
 * @param statusCode
 * @param code
 * @param cause
 * @returns
 */
export const createError = <T extends string>(
	name: string,
	message: string,
	statusCode: number,
	code: T,
	cause?: unknown,
): AppError<T> => ({ name, message, statusCode, code, cause });

/**
 * 404 not-found error
 *
 * @param entityName
 * @param id
 * @param code
 * @returns
 */
export const createNotFoundError = <T extends string>(entityName: string, id: string, code: T): AppError<T> =>
	createError(`${entityName}NotFoundError`, `${entityName} with ID "${id}" not found`, 404, code);

/**
 * 400 invalid objectId error
 *
 * @param entityName
 * @param id
 * @param code
 * @returns
 */
export const createInvalidIdError = <T extends string>(entityName: string, id: string, code: T): AppError<T> =>
	createError(`Invalid${entityName}IdError`, `Invalid ${entityName.toLowerCase()} ID format: "${id}"`, 400, code);

/**
 * 500 database error
 *
 * @param message
 * @param code
 * @param cause
 * @returns
 */
export const createDatabaseError = <T extends string>(message: string, code: T, cause?: unknown): AppError<T> =>
	createError("DatabaseError", message, 500, code, cause);

/**
 * Generic Prisma error handler.
 *
 * @param error
 * @param options
 * @returns
 */
export const handlePrismaError = <T extends string>(
	error: unknown,
	options: PrismaErrorHandlerOptions<T>,
): AppError<T> => {
	const { codes, entityId = "unknown", entityName = "Entity" } = options;

	if (error instanceof Prisma.PrismaClientKnownRequestError) {
		switch (error.code) {
			case "P2025":
				return createNotFoundError(entityName, entityId, codes.notFound);
			case "P2023":
				return createInvalidIdError(entityName, entityId, codes.invalidId);
			case "P2024":
				return createDatabaseError("Database timeout", codes.timeout, error);
			default:
				return createDatabaseError(`Database error: ${error.code}`, codes.database, error);
		}
	}

	if (error instanceof Prisma.PrismaClientValidationError)
		return createDatabaseError("Database validation error", codes.validation, error);

	if (error instanceof Prisma.PrismaClientInitializationError)
		return createDatabaseError("Database connection failed", codes.connection, error);

	return createDatabaseError(error instanceof Error ? error.message : "Unknown error", codes.unknown, error);
};
