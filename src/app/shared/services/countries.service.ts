import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CountryList } from '../../app.models';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  countriesList$ = this.http.get<CountryList[]>(
    `https://restcountries.com/v3.1/all?fields=name,region,flags`
  );

  constructor(private http: HttpClient) {}
}
