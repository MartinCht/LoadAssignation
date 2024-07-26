import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { saveAs } from 'file-saver';
import { SearchTripsResponse } from '../models/search-trips-response.model';
import { SearchTripsRequest } from '../models/search-trips-request.model';
import { TripAssignationExcelResponse } from '../models/trip-assignation-excel-response.model copy';
import { SearchFilters } from '../models/search-filters.model';
import { DownloadTripsRequest } from '../models/download-trips-request.model';

@Injectable({
  providedIn: 'root'
})
export class TripsMonitoringService {
  private apiUrl = 'http://localhost:5264/api/Trip';

  constructor(private httpClient: HttpClient) { }

  search(searchText = '', filters: SearchFilters, page = 0, pageSize = 10): Observable<SearchTripsResponse> {
    const url = this.apiUrl + '/search';

    const request = new SearchTripsRequest(searchText, filters, page, pageSize);

    return this.httpClient.post<SearchTripsResponse>(url, request);
  }

  uploadTripsAssignationExcel(file: File): Observable<TripAssignationExcelResponse[]> {
    const url = this.apiUrl + '/upload';

    const formData = new FormData();
    formData.append('file', file, file.name);

    return this.httpClient.post<TripAssignationExcelResponse[]>(url, formData);
  }

  downloadTripsAssignationExcel(searchText = '', filters: SearchFilters): Observable<void> {
    const url = this.apiUrl + '/download';

    const request = new DownloadTripsRequest(searchText, filters);

    return this.httpClient.post(url, request, { responseType: 'blob' }).pipe(
      map((data: Blob) => {
        const blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        saveAs(blob, 'Cargas.xlsx');
      })
    );
  }
}
