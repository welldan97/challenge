import axios, { AxiosRequestConfig } from 'axios';
import { Response } from '../lib/Response';

// SECTION: Main

interface Args {
  path: string;
  method: 'get' | 'post' | 'patch' | 'delete';
  data?: unknown;
}

const baseRequest = async <T,>(
  { method, path, data }: Args,
  options: AxiosRequestConfig,
) => {
  const result = await axios.request<Response<T>>({
    url: `http://localhost:3000/api/${path}`,
    method,
    data,
    ...options,
  });
  if (result.data.status === 'success') return result.data.value;

  throw new Error('Something went wrong');
};

export default {
  get: async <T,>(path: string, options: AxiosRequestConfig) =>
    baseRequest<T>(
      {
        method: 'get',
        path,
      },
      options,
    ),

  post: async <T,>(path: string, data: unknown, options: AxiosRequestConfig) =>
    baseRequest<T>(
      {
        method: 'post',
        path,
        data,
      },
      options,
    ),
};
