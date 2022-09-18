import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarEchartsComponent } from './pages/bar-echarts/bar-echarts.component';
import { HomeComponent } from './pages/home/home.component';
import { LineEchartsComponent } from './pages/line-echarts/line-echarts.component';
import { PieEchartsComponent } from './pages/pie-echarts/pie-echarts.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'pie-echarts', component: PieEchartsComponent },
      { path: 'bar-echarts', component: BarEchartsComponent },
      { path: 'line-echarts', component: LineEchartsComponent },
      { path: '**', redirectTo: 'home' },
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EchartsRoutingModule { }
