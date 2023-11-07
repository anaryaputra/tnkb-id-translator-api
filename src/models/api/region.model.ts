/**
 * Required external modules
 */
import mongoose from 'mongoose';
import { Region } from '#entities';

export const RegionSchema = new mongoose.Schema<Region>({
    name: {
        required: true,
        type: String,
    },
    code: {
        required: true,
        type: String,
    },
});

export const RegionModel = mongoose.model<Region>('Region', RegionSchema);
