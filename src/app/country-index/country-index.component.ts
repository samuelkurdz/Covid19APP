import { Component, OnInit } from '@angular/core';
import { CovidService } from '../covidcount/covidservice.service';

@Component({
  selector: 'app-country-index',
  templateUrl: './country-index.component.html',
  styleUrls: ['./country-index.component.css']
})
export class CountryIndexComponent implements OnInit {
countriesData = [];

  constructor(private covidService: CovidService) { }

  ngOnInit(): void {
    this.getCountriesIndex();    
  }

  getCountriesIndex() {
    this.covidService.getCountryData().subscribe((data) => {
      this.countriesData = [...data];
      // console.log(this.countriesData);
    })
  }

}
