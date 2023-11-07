/**
 * Required External Modules
 */
import { lowerCase } from 'lodash';
import { RegionModel } from '#models';
import { Region } from '#entities';

export interface RegionQuery {
    regions?: string;
    codes?: string;
    islands?: string;
}

export const getRegions = async (query: RegionQuery): Promise<Region[]> => {
    if (Object.keys(query).length) {
        const regions: string[] = query.regions ? query.regions.split(',').map((region) => lowerCase(region)) : [];
        const codes: string[] = query.codes ? lowerCase(query.codes).split(' ') : [];
        const islands: string[] = query.islands ? query.islands.split(',').map((island) => lowerCase(island)) : [];

        return await RegionModel.find({
            $or: [
                {
                    name: {
                        $in: regions,
                    },
                },
                {
                    code: {
                        $in: codes,
                    },
                },
                {
                    island: {
                        $in: islands,
                    },
                },
            ],
        });
    } else {
        return await RegionModel.find();
    }
};
