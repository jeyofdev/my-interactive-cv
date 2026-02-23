import { Prisma } from "@/prisma/generated/prisma/client";

export type ResumeErrorType =
	| "RESUME_NOT_FOUND"
	| "INVALID_RESUME_ID"
	| "DATABASE_ERROR"
	| "VALIDATION_ERROR"
	| "CONNECTION_ERROR"
	| "TIMEOUT_ERROR"
	| "UNKNOWN_ERROR";

export type ResumeError = {
	name: string;
	message: string;
	statusCode: number;
	code: ResumeErrorType;
	cause?: unknown;
};

/**
 * Functions to create errors
 *
 * @param id
 * @returns
 */
export const createResumeNotFoundError = (id: string): ResumeError => {
	return {
		name: "ResumeNotFoundError",
		message: `Resume with ID ${id} not found`,
		statusCode: 404,
		code: "RESUME_NOT_FOUND",
	};
};

/**
 * Error if the ID is not an object ID
 * @param id
 * @returns
 */
export const createInvalidResumeIdError = (id: string): ResumeError => {
	return {
		name: "InvalidResumeIdError",
		message: `Invalid resume ID format: ${id}`,
		statusCode: 400,
		code: "INVALID_RESUME_ID",
	};
};

/**
 * Database error
 *
 * @param message
 * @param originalError
 * @param code
 * @returns
 */
export const createDatabaseError = (
	message: string,
	originalError?: unknown,
	code: ResumeErrorType = "DATABASE_ERROR",
): ResumeError => {
	return {
		name: "DatabaseError",
		message,
		statusCode: 500,
		code,
		cause: originalError,
	};
};

// Type checkers
export const isResumeNotFoundError = (error: ResumeError): boolean => {
	return error.code === "RESUME_NOT_FOUND";
};

export const isInvalidResumeIdError = (error: ResumeError): boolean => {
	return error.code === "INVALID_RESUME_ID";
};

export const isDatabaseError = (error: ResumeError): boolean => {
	return error.code === "DATABASE_ERROR";
};

// Prisma error handler
export const handlePrismaError = (error: unknown, resumeId?: string): ResumeError => {
	console.error("Prisma error:", error);

	// Specific Prisma errors
	if (error instanceof Prisma.PrismaClientKnownRequestError) {
		switch (error.code) {
			case "P2025": // Record not found
				return createResumeNotFoundError(resumeId || "unknown");

			case "P2023": // Inconsistent column data (invalid ObjectId format)
				return createInvalidResumeIdError(resumeId || "unknown");

			case "P2024": // Timed out
				return createDatabaseError("Database timeout", error, "TIMEOUT_ERROR");

			default:
				return createDatabaseError(`Database error: ${error.code}`, error);
		}
	}

	// Prisma validation error
	if (error instanceof Prisma.PrismaClientValidationError) {
		return createDatabaseError("Database validation error", error, "VALIDATION_ERROR");
	}

	// Database connection error
	if (error instanceof Prisma.PrismaClientInitializationError) {
		return createDatabaseError("Database connection failed", error, "CONNECTION_ERROR");
	}

	// Unknown error
	return createDatabaseError(error instanceof Error ? error.message : "Unknown error", error, "UNKNOWN_ERROR");
};

// Helper to throw an error
export function throwResumeError(error: ResumeError): never {
	const errorObj = new Error(error.message);
	errorObj.name = error.name;

	Object.assign(errorObj, error);

	throw errorObj;
}
