import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatDialogRef } from '@angular/material/dialog';
import { ButtonComponent } from '../button/button.component';
import { TitleComponent } from '../title/title.component';

@Component({
  selector: 'own-drag-and-drop',
  standalone: true,
  imports: [CommonModule, DragDropModule, ButtonComponent, TitleComponent],
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.scss']
})
export class DragAndDropComponent implements OnInit {
  selectedFile: File | null = null;

  constructor(public dialogRef: MatDialogRef<DragAndDropComponent>) { }

  ngOnInit(): void {
    window.addEventListener("dragover", e => {
      e && e.preventDefault();
      e.dataTransfer!.effectAllowed = "none";
      e.dataTransfer!.dropEffect = "none";
    }, false);
    window.addEventListener("drop", e => {
      e && e.preventDefault();
      e.dataTransfer!.effectAllowed = "none";
      e.dataTransfer!.dropEffect = "none";
    }, false);
  }

  onClose(): void {
    this.dialogRef.close(this.selectedFile);
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file && (file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' || file.type === 'application/vnd.ms-excel')) {
      this.selectedFile = file;
      this.onClose();
    } else {
      event.target.value = '';
      this.selectedFile = null;
    }
  }

  onFileDrop(event: any) {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file && (file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' || file.type === 'application/vnd.ms-excel')) {
      this.selectedFile = file;
      console.log('Dropped file:', this.selectedFile);
    } else {
      alert('Please drop a valid Excel file.');
    }
  }

  onDragEnter(event: any) {
    event.preventDefault();
    event.currentTarget.classList.add('dragover');
  }

  onDragLeave(event: any) {
    event.currentTarget.classList.remove('dragover');
  }

  onDragOver(event: any) {
    event.preventDefault();
  }
}
