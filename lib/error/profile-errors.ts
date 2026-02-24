import { AppError, BaseErrorCode, hasErrorCode } from "@/types/error-type";
import { createError, createInvalidIdError, createNotFoundError, handlePrismaError } from "./handle-error";

export type ProfileErrorCode =
	| BaseErrorCode
	| "PROFILE_NOT_FOUND"
	| "PROFILE_INVALID_ID"
	| "PROFILE_LOCKED"
	| "PROFILE_PARSE_ERROR";

export type ProfileError = AppError<ProfileErrorCode>;

export type ProfileErrorType =
	| "PROFILE_NOT_FOUND"
	| "INVALID_PROFILE_ID"
	| "DATABASE_ERROR"
	| "VALIDATION_ERROR"
	| "CONNECTION_ERROR"
	| "TIMEOUT_ERROR"
	| "UNKNOWN_ERROR";

export const createProfileNotFoundError = (id: string): ProfileError =>
	createNotFoundError("Profile", id, "PROFILE_NOT_FOUND");

export const createProfileInvalidIdError = (id: string): ProfileError =>
	createInvalidIdError("Profile", id, "PROFILE_INVALID_ID");

export const createProfileLockedError = (id: string): ProfileError =>
	createError("ProfileLockedError", `Profile "${id}" is locked`, 423, "PROFILE_LOCKED");

export const handleProfilePrismaError = (error: unknown, profileId?: string): ProfileError =>
	handlePrismaError(error, {
		entityId: profileId,
		entityName: "Profile",
		codes: {
			notFound: "PROFILE_NOT_FOUND",
			invalidId: "PROFILE_INVALID_ID",
			timeout: "TIMEOUT_ERROR",
			database: "DATABASE_ERROR",
			validation: "VALIDATION_ERROR",
			connection: "CONNECTION_ERROR",
			unknown: "UNKNOWN_ERROR",
		},
	});

export const isProfileNotFoundError = (e: ProfileError) => hasErrorCode(e, "PROFILE_NOT_FOUND");
export const isProfileInvalidIdError = (e: ProfileError) => hasErrorCode(e, "PROFILE_INVALID_ID");
