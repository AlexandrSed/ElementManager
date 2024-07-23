import { Injectable } from '@angular/core';
import { Element } from './element';

@Injectable({
  providedIn: 'root'
})
export class ElementService {

  constructor() { }

  elementList: Element[] = [
    {
      id: 0,
      name: "work",
      creationDate: new Date(),
      completionDate: new Date(2025,11,25,18,30,20,10),
      description: "description"
    },
    {
      id: 1,
      name: "study",
      creationDate: new Date(),
      completionDate: new Date(2025,11,25,18,30,20,10),
      description: "description"
    },
    {
      id: 2,
      name: "relax",
      creationDate: new Date(),
      completionDate: new Date(2025,11,25,18,30,20,10),
      description: "description"
    }
  ];

  getAllElements(): Element[] {
    return this.elementList;
  }

  getHousingLocationById(id: number): Element | undefined {
    return this.elementList.find((element) => element.id === id);
  }

  addElementToList(element: Element): void {
    this.elementList.push(element);
  }

  deleteElement(id: number): void {
    this.elementList.splice(this.elementList.findIndex(el => el.id === id), 1);
  }

}
