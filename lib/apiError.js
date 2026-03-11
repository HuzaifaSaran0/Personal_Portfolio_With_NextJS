import { NextResponse } from 'next/server';

export class ApiError extends Error {
  constructor(statusCode, message) {
    super(message);
    this.statusCode = statusCode;
  }
}

export function errorResponse(error) {
  if (error instanceof ApiError) {
    return NextResponse.json({ message: error.message }, { status: error.statusCode });
  }

  console.error('Unhandled error:', error);
  return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
}
