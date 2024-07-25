import { Component, inject, ViewChild } from '@angular/core';
import {MatTable, MatTableModule} from '@angular/material/table';
import { Element } from '../element';
import { ElementService } from '../element.service';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { ElementWindowComponent } from '../element-window/element-window.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-element-viewer',
  standalone: true,
  imports: [MatTableModule, MatRippleModule, MatMenuModule, MatButtonModule],
  templateUrl: './element-viewer.component.html',
  styleUrl: './element-viewer.component.css'
})
export class ElementViewerComponent {

  readonly dialog = inject(MatDialog);

  @ViewChild(MatTable)
  table!: MatTable<any>;
  
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

  displayedColumns: string[] = ['id', 'name', 'creationDate', 'completionDate', 'buttons'];

  constructor() {
    this.elementList = this.elementService.getAllElements();
  }

  moveUp(num: number): void {
    if (num > 0) {
      const tmp = this.elementList[num-1];
      this.elementList[num - 1] = this.elementList[num];
      this.elementList[num] = tmp;
      this.table.renderRows();
    }
  }

  moveDown(num: number): void {
    if (num < this.elementList.length - 1) {
      const tmp = this.elementList[num + 1];
      this.elementList[num + 1] = this.elementList[num];
      this.elementList[num] = tmp;
      this.table.renderRows();
    }
  }
}
