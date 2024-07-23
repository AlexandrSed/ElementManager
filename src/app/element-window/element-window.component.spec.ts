import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementWindowComponent } from './element-window.component';

describe('ElementWindowComponent', () => {
  let component: ElementWindowComponent;
  let fixture: ComponentFixture<ElementWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElementWindowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElementWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
