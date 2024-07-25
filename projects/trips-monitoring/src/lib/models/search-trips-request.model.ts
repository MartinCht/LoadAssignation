import { SearchFilters } from "./search-filters.model";

export class SearchTripsRequest {
    searchText: string;
    filters: SearchFilters;
    page: number;
    pageSize: number;

    constructor(searchText: string, filters: SearchFilters, page: number, pageSize: number) {
        this.searchText = searchText;
        this.filters = filters;
        this.page = page;
        this.pageSize = pageSize;
    }
}

