import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  items: MenuItem[] = [];
  activeItem!: MenuItem;
    
  ngOnInit() {
      this.items = [
          {label: 'Home', icon: 'pi pi-home', routerLink: 'echarts/home'},
          {label: 'Pie Echarts', icon: 'pi pi-angle-down', routerLink: 'echarts/pie-echarts'},
          {label: 'Bar Echarts', icon: 'pi pi-angle-down', routerLink: 'echarts/bar-echarts'},
          {label: 'Line Echarts', icon: 'pi pi-angle-down', routerLink: 'echarts/line-echarts'},
      ];

      this.activeItem = this.items[0];
  }
}