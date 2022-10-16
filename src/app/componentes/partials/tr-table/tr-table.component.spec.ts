import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrTableComponent } from './tr-table.component';

describe('TrTableComponent', () => {
  let component: TrTableComponent;
  let fixture: ComponentFixture<TrTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
