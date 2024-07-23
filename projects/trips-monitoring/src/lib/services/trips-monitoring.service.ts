import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SearchTripsResponse } from '../models/search-trips-response.model';
import { SearchTripsRequest } from '../models/search-trips-request.model';
import { TripAssignationExcelResponse } from '../models/trip-assignation-excel-response.model copy';

@Injectable({
  providedIn: 'root'
})
export class TripsMonitoringService {
  private apiUrl = 'http://localhost:5264/api/Trip';

  constructor(private httpClient: HttpClient) { }

  search(searchText = '', page = 0, pageSize = 10): Observable<SearchTripsResponse> {
    const url = this.apiUrl + '/search';

    const request = new SearchTripsRequest(searchText, page, pageSize);

    return this.httpClient.post<SearchTripsResponse>(url, request);
  }

  uploadTripsAssignationExcel(file: File): Observable<TripAssignationExcelResponse[]> {
    const url = this.apiUrl + '/upload';

    const formData = new FormData();
    formData.append('file', file, file.name);

    return this.httpClient.post<TripAssignationExcelResponse[]>(url, formData);
  }
}
