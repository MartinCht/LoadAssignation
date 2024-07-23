export class SearchTripsRequest {
    searchText: string;
    page: number;
    pageSize: number;

    constructor(searchText: string, page: number, pageSize: number) {
        this.searchText = searchText;
        this.page = page;
        this.pageSize = pageSize;
    }
}

