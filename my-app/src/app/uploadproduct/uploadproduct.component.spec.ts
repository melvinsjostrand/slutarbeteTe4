import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadproductComponent } from './uploadproduct.component';

describe('UploadproductComponent', () => {
  let component: UploadproductComponent;
  let fixture: ComponentFixture<UploadproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadproductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UploadproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
