import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VirusIndex } from './covidInterface';
import { CountryIndex } from './covidInterface';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  allUrl = 'https://coronavirus-19-api.herokuapp.com/all';

  countriesUrl = 'https://coronavirus-19-api.herokuapp.com/countries';

  searchCountryUrl = 'https://coronavirus-19-api.herokuapp.com/countries';

  // let   searchCountryUrl = 'https://coronavirus-19-api.herokuapp.com/countries/Nigeria';

  constructor(private http: HttpClient) { }

  getWorldIndex(): Observable<VirusIndex> {
    return this.http.get<VirusIndex>(this.allUrl);
  }

  getCountryData(): Observable<any> {
    return this.http.get<any>(this.countriesUrl);
  }
  
  getSpecificCountryData(country): Observable<CountryIndex> {
    return this.http.get<CountryIndex>(`${this.searchCountryUrl}/${country}`);
    // return this.http.get<any>(`https://coronavirus-19-api.herokuapp.com/countries/${country}`);
  }


}