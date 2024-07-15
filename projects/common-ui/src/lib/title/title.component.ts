import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'own-title',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent {

}
