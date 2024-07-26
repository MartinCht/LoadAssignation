import { SearchFilters } from "./search-filters.model";

export class DownloadTripsRequest {
    searchText: string;
    filters: SearchFilters;

    constructor(searchText: string, filters: SearchFilters) {
        this.searchText = searchText;
        this.filters = filters;
    }
}

