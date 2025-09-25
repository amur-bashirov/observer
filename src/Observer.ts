import { Flight } from "./entity/Flight.ts";

export interface Observer{
    update(flight: Flight | null, oldflight: Flight | null): void;
}