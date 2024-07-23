import { Component, inject } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { AddElementComponent } from '../add-element/add-element.component';
import {MatCardModule, MatCardActions} from '@angular/material/card';
import { ElementService } from '../element.service';
import { Element } from '../element';
import { ElementCardComponent } from '../element-card/element-card.component';

@Component({
  selector: 'app-element-editor',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatCardModule, CommonModule, ElementCardComponent],
  templateUrl: './element-editor.component.html',
  styleUrl: './element-editor.component.css'
})
export class ElementEditorComponent {

  elementList: Element[] = [];

  elementService: ElementService = inject(ElementService);
  readonly dialog = inject(MatDialog);

  constructor() {
    this.elementList = this.elementService.getAllElements();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddElementComponent, { data: {add: this.addElement, elService: this.elementService}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  addElement(el: Element, elService: ElementService): void {
    elService.addElementToList(el);
    console.log(elService.getAllElements());
  }

  deleteElement(id: number, elService: ElementService): void {
    elService.deleteElement(id);
    console.log(elService.getAllElements());
  }
}
