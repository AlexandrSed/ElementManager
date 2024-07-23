import { Component, inject } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { Element } from '../element';
import { ElementService } from '../element.service';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { ElementWindowComponent } from '../element-window/element-window.component';

@Component({
  selector: 'app-element-viewer',
  standalone: true,
  imports: [MatTableModule, MatRippleModule],
  templateUrl: './element-viewer.component.html',
  styleUrl: './element-viewer.component.css'
})
export class ElementViewerComponent {

  readonly dialog = inject(MatDialog);
  
  openDialog(row: any): void {
    console.log(row);
    const dialogRef = this.dialog.open(ElementWindowComponent, { data: {el: row}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  elementService: ElementService = inject(ElementService);
  readonly elementList: Element[] = [];

  displayedColumns: string[] = ['id', 'name', 'creationDate', 'completionDate', 'description'];

  constructor() {
    this.elementList = this.elementService.getAllElements();
  }

  addElement(el: Element, elService: ElementService): void {
    
  }
}
