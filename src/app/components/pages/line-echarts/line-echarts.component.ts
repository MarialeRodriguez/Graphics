import { Component, OnInit } from '@angular/core';
import { country } from 'src/app/components/interface/paisesDB';
import { EChartsOption } from "echarts";

@Component({
  selector: 'app-line-echarts',
  templateUrl: './line-echarts.component.html',
  styleUrls: ['./line-echarts.component.scss']
})
export class LineEchartsComponent implements OnInit {

  manejarData() {
    let dataSeries: any[] = [];
    const data = country.map(item => {
      console.log(item);
      dataSeries.push({ value: parseInt((item.km2).replace(/,/g, "")), name: item.country });
    })
    console.log(dataSeries);
    return dataSeries;
  }

  ngOnInit(): void {
    this.manejarData();
  }

  options: EChartsOption = {
    
      xAxis: {
        type: 'category',
        data: ['China', 'India', 'USA', 'Indonesia', 'Pakistan', 'Brasil', 'Nigeria', 'Bangladesh', 'Rusia', 'Mexico'],
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
        type: 'line',
        data: this.manejarData(),
        color: ['#0244BF']
        }
      ]
    };

  }

