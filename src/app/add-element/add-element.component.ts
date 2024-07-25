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
    completionDate: new Date(0),
    description: ""
  };

  ValNameMessage: string = "";
  ValDateMessage: string = "";
    
  constructor(@Inject(MAT_DIALOG_DATA) public data: {add: (el: Element, elService: ElementService)=> void, elService: ElementService}) {
  }

  create(): void {
    this.ValNameMessage = "";
    this.ValDateMessage = "";

    this.newElement.creationDate = new Date();
    this.newElement.id = this.data.elService.getAllElements()[this.data.elService.getAllElements().length - 1].id + 1;

    if (this.newElement.name === "") {
      this.ValNameMessage = "Введите название";
    }

    if (typeof this.newElement.completionDate !== "string") {
      this.ValDateMessage = "Введите дату";
    }
    else {
      this.newElement.completionDate = new Date(this.newElement.completionDate);

      if (this.newElement.completionDate.getTime() < this.newElement.creationDate.getTime())
        this.ValDateMessage = "Введите дату выполнения позже даты создания";
    }
    
    if (this.ValNameMessage === "" && this.ValDateMessage === "") {
      this.data.add(this.newElement, this.data.elService);
      this.onNoClick();
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
    console.log(this.newElement);
  }
}
