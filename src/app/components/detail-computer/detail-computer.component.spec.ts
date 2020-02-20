import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailComputerComponent } from './detail-computer.component';

describe('DetailComputerComponent', () => {
  let component: DetailComputerComponent;
  let fixture: ComponentFixture<DetailComputerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailComputerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailComputerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
