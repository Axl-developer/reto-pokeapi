/* eslint-disable @typescript-eslint/no-explicit-any */
/// <reference types="vite/client" />
/// <reference types="vitest" />

declare type Nullable<T> = T | null;
declare type Undefined<T> = T | undefined;

interface ImportMetaEnv {
    readonly BASE_URL:string
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
