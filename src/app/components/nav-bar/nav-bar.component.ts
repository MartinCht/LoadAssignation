import { Component, OnInit } from '@angular/core';
import { NavBarItem } from '../../models/nav-bar-item.model';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  items: NavBarItem[];

  ngOnInit(): void {
    this.items = [
      { title: 'Tablero', icon: 'assets/icons/desktop-solid.svg' },
      { title: 'Graficos', icon: 'assets/icons/chart-pie-solid.svg' },
      { title: 'Viajes', icon: 'assets/icons/truck-solid.svg' },
    ]
  }
}