import { Component, Input, NgModule } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() text: string = '';
  @Input() color: string = '';
  
  constructor() {
  
  }
}
