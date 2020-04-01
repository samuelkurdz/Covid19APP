import { Component, OnInit } from '@angular/core';
import { CovidService } from '../covidcount/covidservice.service';
import { VirusIndex } from '../covidcount/covidInterface';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {

  worldIndex = [];
  nigeriaIndex = [];

  constructor(private covidService: CovidService) { }

  ngOnInit(): void {
    this.loadWorldIndex();
    this.loadNigeriaIndex('Nigeria');
  }

  loadWorldIndex() {
    this.covidService.getWorldIndex().subscribe((data) => {
      this.worldIndex.push(data);
      // console.log(this.worldIndex);
    })
  }

  loadNigeriaIndex(z) {
    this.covidService.getSpecificCountryData(z).subscribe((data) => {
      this.nigeriaIndex.push(data);
      // console.log(this.nigeriaIndex);
      
    })
  }

}
