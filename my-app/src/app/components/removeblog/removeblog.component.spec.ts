import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveblogComponent } from './removeblog.component';

describe('RemoveblogComponent', () => {
  let component: RemoveblogComponent;
  let fixture: ComponentFixture<RemoveblogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemoveblogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RemoveblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
