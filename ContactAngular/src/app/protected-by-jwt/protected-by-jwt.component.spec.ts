import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtectedByJwtComponent } from './protected-by-jwt.component';

describe('ProtectedByJwtComponent', () => {
  let component: ProtectedByJwtComponent;
  let fixture: ComponentFixture<ProtectedByJwtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProtectedByJwtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtectedByJwtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
