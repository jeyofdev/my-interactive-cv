import { AppError, BaseErrorCode, hasErrorCode } from "@/types/error-type";
import { createError, createInvalidIdError, createNotFoundError, handlePrismaError } from "./handle-error";

export type ResumeErrorCode =
	| BaseErrorCode
	| "RESUME_NOT_FOUND"
	| "RESUME_INVALID_ID"
	| "RESUME_LOCKED"
	| "RESUME_PARSE_ERROR";

export type ResumeError = AppError<ResumeErrorCode>;

export type ResumeErrorType =
	| "RESUME_NOT_FOUND"
	| "INVALID_RESUME_ID"
	| "DATABASE_ERROR"
	| "VALIDATION_ERROR"
	| "CONNECTION_ERROR"
	| "TIMEOUT_ERROR"
	| "UNKNOWN_ERROR";

export const createResumeNotFoundError = (id: string): ResumeError =>
	createNotFoundError("Resume", id, "RESUME_NOT_FOUND");

export const createResumeInvalidIdError = (id: string): ResumeError =>
	createInvalidIdError("Resume", id, "RESUME_INVALID_ID");

export const createResumeLockedError = (id: string): ResumeError =>
	createError("ResumeLockedError", `Resume "${id}" is locked`, 423, "RESUME_LOCKED");

export const handleResumePrismaError = (error: unknown, resumeId?: string): ResumeError =>
	handlePrismaError(error, {
		entityId: resumeId,
		entityName: "Resume",
		codes: {
			notFound: "RESUME_NOT_FOUND",
			invalidId: "RESUME_INVALID_ID",
			timeout: "TIMEOUT_ERROR",
			database: "DATABASE_ERROR",
			validation: "VALIDATION_ERROR",
			connection: "CONNECTION_ERROR",
			unknown: "UNKNOWN_ERROR",
		},
	});

export const isResumeNotFoundError = (e: ResumeError) => hasErrorCode(e, "RESUME_NOT_FOUND");
export const isResumeInvalidIdError = (e: ResumeError) => hasErrorCode(e, "RESUME_INVALID_ID");
