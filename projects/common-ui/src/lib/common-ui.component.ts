import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'own-CommonUI',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      common-ui works!
    </p>
  `,
  styles: [
  ]
})
export class CommonUIComponent {

}
