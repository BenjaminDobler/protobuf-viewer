import { Component, Input } from '@angular/core';

@Component({
  selector: 'prop',
  imports: [],
  templateUrl: './property.component.html',
  styleUrl: './property.component.scss',
})
export class PropertyComponent {
  @Input()
  value: any;

  @Input()
  name: any;
}
