declare namespace NodeJS {
  export interface ProcessEnv {
    DATABASE_URL: string;
    RESID_URL: string;
    PORT: string;
    SESSION_SECRET: string;
    CORS_ORIGIN: string;
  }
}
