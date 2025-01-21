import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmenuTitleComponent } from './submenu-title.component';

describe('SubmenuTitleComponent', () => {
  let component: SubmenuTitleComponent;
  let fixture: ComponentFixture<SubmenuTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubmenuTitleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmenuTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
