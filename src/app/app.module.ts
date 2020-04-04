import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { NewspageComponent } from './newspage/newspage.component';
import { CountryIndexComponent } from './country-index/country-index.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { FilterPipe } from './filter/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingpageComponent,
    NewspageComponent,
    CountryIndexComponent,
    AboutPageComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
