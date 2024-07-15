import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'tablero', loadChildren: () => import('@TripsMonitoring').then(m => m.TripsMonitoringRoutingModule) },
  { path: '', redirectTo: '/tablero', pathMatch: 'full' },
  { path: '**', redirectTo: '/tablero' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
