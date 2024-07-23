import { Component, Input } from '@angular/core';
import { Element } from '../element';
import { MatButtonModule } from '@angular/material/button';
import { MatCardActions, MatCardModule } from '@angular/material/card';
import { ElementService } from '../element.service';

@Component({
  selector: 'app-element-card',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatCardActions],
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
}
