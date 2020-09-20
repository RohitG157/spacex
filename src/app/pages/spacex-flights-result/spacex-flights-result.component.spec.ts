import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacexFlightsResultComponent } from './spacex-flights-result.component';

describe('SearchResultComponent', () => {
  let component: SpacexFlightsResultComponent;
  let fixture: ComponentFixture<SpacexFlightsResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpacexFlightsResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpacexFlightsResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
