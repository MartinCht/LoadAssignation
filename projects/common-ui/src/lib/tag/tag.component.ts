import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagTypes } from '../models/tag-types.model';

@Component({
  selector: 'own-tag',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent {
  @Input() text: string = '';
  @Input() type: TagTypes = 'info';
}
