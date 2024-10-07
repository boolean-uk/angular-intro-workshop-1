import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrl: './car.component.css',
})
export class CarComponent {
  @Input('name') name: string = '';
  @Output('favourite') favourite = new EventEmitter<string>();
}
