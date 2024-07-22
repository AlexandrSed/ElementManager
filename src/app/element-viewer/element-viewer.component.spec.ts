import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementViewerComponent } from './element-viewer.component';

describe('ElementViewerComponent', () => {
  let component: ElementViewerComponent;
  let fixture: ComponentFixture<ElementViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElementViewerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElementViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
