import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'echarts',
    loadChildren: () => import('./components/echarts.module').then( m => m.EchartsModule )
  },
  {
    path: '**',
    redirectTo: 'echarts'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
