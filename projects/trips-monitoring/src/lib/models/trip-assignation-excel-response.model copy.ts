import { RoutesResponse } from "./routes-response.model.";

export class TripAssignationExcelResponse {
    number: string[];
    truckNumber: string;
    startDate: string;
    routes: RoutesResponse[]
}