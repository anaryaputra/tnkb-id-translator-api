export interface BaseRegion {
    name: string;
    code: string;
    island: string;
}

export interface Region extends BaseRegion {
    id: number;
}
