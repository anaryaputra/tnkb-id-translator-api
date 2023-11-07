export interface Config {
    APP: AppConfig;
    DB: DbConfig;
}

export interface AppConfig {
    PORT: number;
}

export interface DbConfig {
    URL: string;
}
