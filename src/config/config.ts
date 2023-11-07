/**
 * Required Modules
 */
import { Config } from './config.interface';
import dotenv from 'dotenv';

/**
 * Application Configuration
 */
dotenv.config();

const CONFIG: Config = {
    APP: {
        PORT: process.env.PORT || 8000,
    },
    DB: {
        URL: process.env.DB_URL,
    },
};

export default CONFIG;
