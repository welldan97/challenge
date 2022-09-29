// SECTION: Main

interface Success<T> {
  status: 'success';
  value: T;
}

interface Failure {
  status: 'error';
  message: string;
}

export type Response<T> = Success<T> | Failure;
