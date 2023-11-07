/**
 * Required External Modules
 */
import express from 'express';
import { Region } from '#entities';
import { RegionService } from '#services';

/**
 * Controller Methods
 */
export const getRegions = async (req: express.Request, res: express.Response): Promise<void> => {
    try {
        const regions: Region[] = await RegionService.getRegions(req.query);
        res.json(regions);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};
