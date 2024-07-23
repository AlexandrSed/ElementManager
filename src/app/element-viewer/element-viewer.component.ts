import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-element-viewer',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './element-viewer.component.html',
  styleUrl: './element-viewer.component.css'
})
export class ElementViewerComponent {

}
