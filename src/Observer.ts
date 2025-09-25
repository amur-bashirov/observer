import { Flight } from "./entity/Flight";

export interface Observer{
    update(flight: Flight | null, oldflight: Flight | null): void;
}