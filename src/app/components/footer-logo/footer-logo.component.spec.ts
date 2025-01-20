import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterLogoComponent } from './footer-logo.component';

describe('FooterLogoComponent', () => {
  let component: FooterLogoComponent;
  let fixture: ComponentFixture<FooterLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterLogoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
