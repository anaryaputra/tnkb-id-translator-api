export interface BaseRegion {
    name: string;
    code: string;
}

export interface Region extends BaseRegion {
    id: number;
}
