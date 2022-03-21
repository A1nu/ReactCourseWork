export type CivilizationId = number;

export type Civilization = {
    id: CivilizationId;
    name: string;
    expansion: string;
    army_type: string;
    unique_unit: string[];
    unique_tech: string[];
    team_bonus: string[];
}

export enum Status {
    LOADING = 'loading',
    IDLE = "idle"
}
