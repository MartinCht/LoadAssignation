import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'viajes', loadChildren: () => import('@TripsMonitoring').then(m => m.TripsMonitoringRoutingModule) },
  { path: '', redirectTo: '/viajes', pathMatch: 'full' },
  { path: '**', redirectTo: '/viajes' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
