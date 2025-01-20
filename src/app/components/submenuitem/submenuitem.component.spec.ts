import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmenuitemComponent } from './submenuitem.component';

describe('SubmenuitemComponent', () => {
  let component: SubmenuitemComponent;
  let fixture: ComponentFixture<SubmenuitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubmenuitemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmenuitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
