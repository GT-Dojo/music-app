import axios, { isAxiosError } from 'axios';
import camelcaseKeys from 'camelcase-keys';
import decamelizeKeys from 'decamelize-keys';
import { parseAuthenticityToken } from '../helpers/parseAuthenticityToken';

let csrfToken: string;

const client = axios.create({
  withCredentials: true,
  headers: {
    Accept: 'application/json',
  },
});

client.interceptors.request.use((config) => {
  const method = config.method?.toUpperCase();
  if (method === 'POST' || method === 'PUT' || method === 'DELETE') {
    if (!csrfToken) {
      csrfToken = parseAuthenticityToken() || '';
    }
    config.headers['X-CSRF-TOKEN'] = csrfToken;
  }

  config.data = decamelizeKeys(config.data, { deep: true });
  return config;
});

client.interceptors.response.use(
  (response) => {
    response.data = camelcaseKeys(response.data, { deep: true });
    return response;
  },
  (error) => {
    error.response.data = camelcaseKeys(error.response.data, { deep: true });
    return Promise.reject(error);
  }
);

interface ApiResponseData<T> {
  data: T;
}

interface ApiResponseError {
  message: string;
  errors?: Record<string, string[]>;
}

export class ApiError extends Error {}

export class ApiNotFoundError extends ApiError {
  constructor(message: string) {
    super(message);
  }
}

export class ApiUnprocessableEntityError extends ApiError {
  constructor(
    message: string,
    public readonly errors?: Record<string, string[]>
  ) {
    super(message);
  }
}

interface ExecuteApiParams {
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  data?: FormData | Record<string, unknown>;
}

export async function executeApi<T>({ url, method, data }: ExecuteApiParams) {
  try {
    const { data: responseData } = await client.request<ApiResponseData<T>>({ url, method, data });
    return responseData.data;
  } catch (err) {
    if (isAxiosError<ApiResponseError>(err) && err.response) {
      const { message, errors } = err.response.data;

      switch (err.response.status) {
        case 404:
          throw new ApiNotFoundError(message);
        case 422:
          throw new ApiUnprocessableEntityError(message, errors);
        default:
          throw new ApiError(message);
      }
    }
    throw err;
  }
}

export function isApiError(err: unknown): err is ApiError {
  return err instanceof ApiError;
}

export function isApiNotFoundError(err: unknown): err is ApiNotFoundError {
  return err instanceof ApiNotFoundError;
}

export function isApiUnprocessableEntityError(err: unknown): err is ApiUnprocessableEntityError {
  return err instanceof ApiUnprocessableEntityError;
}
