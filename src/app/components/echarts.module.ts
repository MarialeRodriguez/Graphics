import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {AccordionModule} from 'primeng/accordion';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';

import {  NgxEchartsModule  }  from  'ngx-echarts' ;
import { EchartsRoutingModule } from './echarts-routing.module';
import { MenuComponent } from './shared/menu.component';
import { PieEchartsComponent } from './pages/pie-echarts/pie-echarts.component';
import { BarEchartsComponent } from './pages/bar-echarts/bar-echarts.component';
import { LineEchartsComponent } from './pages/line-echarts/line-echarts.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { HomeComponent } from './pages/home/home.component';


@NgModule({
  declarations: [
    MenuComponent,
    PieEchartsComponent,
    BarEchartsComponent,
    LineEchartsComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    EchartsRoutingModule,
    AccordionModule,
    BreadcrumbModule,
    ButtonModule,
    MenuModule,
    TabMenuModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
  ],
  exports: [
    MenuComponent,
    PieEchartsComponent,
    BarEchartsComponent,
    LineEchartsComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class EchartsModule { }
