import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingpageComponent } from './landingpage/landingpage.component';
import { NewspageComponent } from './newspage/newspage.component';
import { CountryIndexComponent } from './country-index/country-index.component';
import { AboutPageComponent } from './about-page/about-page.component';


const routes: Routes = [
  {path: '', component: LandingpageComponent},
  {path: 'news', component: NewspageComponent},
  {path: 'countryindex', component: CountryIndexComponent},
  {path: 'about', component: AboutPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
