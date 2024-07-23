import { Component, Input } from '@angular/core';
import { Element } from '../element';
import { MatButtonModule } from '@angular/material/button';
import { MatCardActions, MatCardModule } from '@angular/material/card';
import { ElementService } from '../element.service';
import { ClipboardModule } from 'ngx-clipboard';

@Component({
  selector: 'app-element-card',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, ClipboardModule, MatCardActions],
  templateUrl: './element-card.component.html',
  styleUrl: './element-card.component.css'
})
export class ElementCardComponent {
  @Input() element!: Element;
  @Input() delete: (id: number, elService: ElementService) => void;
  @Input() elService!: ElementService;

  constructor() {
    this.delete = () => console.log("not delete");
  }

  copyMessage(): string {
    return "id: " + this.element.id +
    "\n name: " + this.element.name +
    "\n date creation: " + this.element.creationDate +
    "\n date comletion: " + this.element.completionDate +
    "\n description: " + this.element.description;
  }
}
