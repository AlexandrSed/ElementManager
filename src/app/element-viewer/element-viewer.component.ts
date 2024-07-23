import { Component, inject } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { Element } from '../element';
import { ElementService } from '../element.service';

@Component({
  selector: 'app-element-viewer',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './element-viewer.component.html',
  styleUrl: './element-viewer.component.css'
})
export class ElementViewerComponent {

  elementService = inject(ElementService);
  readonly elementList: Element[] = [];

  displayedColumns: string[] = ['id', 'name', 'creationDate', 'completionDate', 'description'];

  constructor() {
    this.elementList = this.elementService.getAllElements();
  }
}
