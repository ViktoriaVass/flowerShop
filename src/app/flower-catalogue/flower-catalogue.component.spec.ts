import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowerCatalogueComponent } from './flower-catalogue.component';

describe('FlowerCatalogueComponent', () => {
  let component: FlowerCatalogueComponent;
  let fixture: ComponentFixture<FlowerCatalogueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlowerCatalogueComponent]
    });
    fixture = TestBed.createComponent(FlowerCatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
