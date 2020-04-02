import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryIndexComponent } from './country-index.component';

describe('CountryIndexComponent', () => {
  let component: CountryIndexComponent;
  let fixture: ComponentFixture<CountryIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
