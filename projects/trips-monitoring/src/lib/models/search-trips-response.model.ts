import { RoutesResponse } from "./routes-response.model.";

export class SearchTripsResponse {
    total: number;
    results: TripsResponse[];
}

export class TripsResponse {
    number: string[];
    truckNumber: string;
    routes: RoutesResponse[]
    startDate: string;
    unitsAmount: number;
    totalKm: number;
}
