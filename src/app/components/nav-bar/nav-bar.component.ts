import { Component, OnInit } from '@angular/core';
import { NavBarItem } from '../../models/nav-bar-item.model';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  items: NavBarItem[] = [
    { title: 'Tablero', icon: 'assets/icons/desktop-solid.svg', route: 'tablero' },
    { title: 'Graficos', icon: 'assets/icons/chart-pie-solid.svg', route: 'graficos' },
    { title: 'Viajes', icon: 'assets/icons/truck-solid.svg', route: 'viajes' },
  ];

  constructor() { }
}