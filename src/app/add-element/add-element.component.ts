import { Component, Inject, inject, Input } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { Element } from '../element';
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
import { ElementService } from '../element.service';

@Component({
  selector: 'app-add-element',
  standalone: true,
  imports: [MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ],
  templateUrl: './add-element.component.html',
  styleUrl: './add-element.component.css'
})
export class AddElementComponent {

  readonly dialogRef = inject(MatDialogRef<AddElementComponent>);
  newElement: Element = {
    id: 0,
    name: "",
    creationDate: new Date(12, 4, 2023, 12, 0, 20),
    completionDate: new Date(),
    description: ""
  };

    
  constructor(@Inject(MAT_DIALOG_DATA) public data: {add: (el: Element, elService: ElementService)=> void, elService: ElementService}) {
  }

  create(): void {
    this.newElement.creationDate = new Date();
    this.newElement.id = this.data.elService.elementList[this.data.elService.elementList.length - 1].id + 1;
    this.data.add(this.newElement, this.data.elService);
    this.onNoClick();
  }

  onNoClick(): void {
    this.dialogRef.close();
    console.log(this.newElement);
  }
}
