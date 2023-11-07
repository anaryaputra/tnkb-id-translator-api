/**
 * Required External Modules
 */
import { lowerCase, startCase } from 'lodash';
import { RegionModel } from '#models';
import { Region } from '#entities';

export interface RegionQuery {
    regions?: string;
    codes?: string;
}

export const getRegions = async (query: RegionQuery): Promise<Region[]> => {
    if (Object.keys(query).length) {
        const regions: string[] = query.regions ? query.regions.split(',').map((region) => lowerCase(region)) : [];
        const codes: string[] = query.codes ? lowerCase(query.codes).split(' ') : [];

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
            ],
        });
    } else {
        return await RegionModel.find();
    }
};
