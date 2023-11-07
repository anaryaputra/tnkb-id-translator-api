/**
 * Required External Modules
 */
import express from 'express';
import helmet from 'helmet';
import mongoose from 'mongoose';
import { CONFIG } from '#config';
import { RegionRoutes } from '#routes';

/**
 * App Variables
 */
const app: express.Express = express();

/**
 * App Configuration
 */
app.use(helmet());
app.use(express.json());

/**
 * DB Activation
 */
mongoose.connect(CONFIG.DB.URL);
mongoose.connection.on('connected', () => console.log('⚡️[db]: Database connected.'));
mongoose.connection.on('error', (error: any) => console.log(`⚡️[db]: Database error: ${error.message}`));
process.on('SIGINT', () => {
    mongoose.connection.close().then(() => {
        console.log('⚡️[db]: Database disconnected due to application terminated.');
        process.exit(0);
    });
});

/**
 * App Middlewares
 */
app.use('/api/regions', RegionRoutes);

/**
 * Server Activation
 */
app.listen(CONFIG.APP.PORT, () => console.log(`⚡️[server]: Server is running at http://localhost:${CONFIG.APP.PORT}`));
