const UserError = {
    INVALID_EMAIL: 'Invalid email address.',
    INVALID_PASSWORD: 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number.',
    USER_NOT_FOUND: 'User not found.',
    EMAIL_ALREADY_EXISTS: 'Email already exists.',
    INVALID_CREDENTIALS: 'Invalid email or password.',
    UNAUTHORIZED_ACCESS: 'Unauthorized access. Please log in.',
    TOKEN_EXPIRED: 'Session expired. Please log in again.',
    INVALID_TOKEN: 'Invalid token. Please log in again.',
    PASSWORD_MISMATCH: 'Passwords do not match.',
    MISSING_FIELDS: 'Required fields are missing.',
    SERVER_ERROR: 'An unexpected error occurred. Please try again later.'
}

module.exports = UserError;