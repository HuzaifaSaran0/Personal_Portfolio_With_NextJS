export class ApiError extends Error {
  constructor(statusCode, message) {
    super(message);
    this.statusCode = statusCode;
  }
}

export function errorResponse(res, error) {
  if (error instanceof ApiError) {
    return res.status(error.statusCode).json({ message: error.message });
  }

  console.error('Unhandled error:', error);
  return res.status(500).json({ message: 'Internal server error' });
}
