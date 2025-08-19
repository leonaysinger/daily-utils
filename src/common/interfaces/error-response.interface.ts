export interface ErrorResponse {
  statusCode: number;
  timestamp: string;
  path: string;
  method: string;
  message: string;
  error: string;
  stack?: string;
}

export interface ValidationErrorResponse extends ErrorResponse {
  errors?: string[];
  fieldErrors?: Record<string, string[]>;
} 