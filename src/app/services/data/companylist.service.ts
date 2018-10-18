import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

/**
 * Service for processing company-related Http requests.
 * 
 * @export
 * @class CompanyListService
 */
@Injectable()
export class CompanyListService {

  constructor(private http: HttpClient) { }

  /**
   * Returns a list of companies.
   * 
   * @param {boolean} [partners]
   * @returns {Observable<Company[]>} 
   * @memberof CompanyService
   */
    public list() {
    return this.http.get('assets/data/companyList.json');
  };
}