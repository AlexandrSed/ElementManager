import { Component, Inject, inject } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { Element } from '../element';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-element-window',
  standalone: true,
  imports: [MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,],
  templateUrl: './element-window.component.html',
  styleUrl: './element-window.component.css'
})
export class ElementWindowComponent {
  
  readonly dialogRef = inject(MatDialogRef<ElementWindowComponent>);
    
  constructor(@Inject(MAT_DIALOG_DATA) public data: {el: Element}) {
  }

  onNoClick(): void {
    this.dialogRef.close();
    console.log(this.data.el);
  }
}
