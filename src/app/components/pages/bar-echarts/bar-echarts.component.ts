import { Component, OnInit } from '@angular/core';
import { country } from 'src/app/components/interface/paisesDB';
import { EChartsOption } from "echarts";

@Component({
  selector: 'app-bar-echarts',
  templateUrl: './bar-echarts.component.html',
  styleUrls: ['./bar-echarts.component.scss']
})
export class BarEchartsComponent implements OnInit {

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
    color: ['#FAB10D'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        data: ['China', 'India', 'USA', 'Indonesia', 'Pakistan', 'Brasil', 'Nigeria', 'Bangladesh', 'Rusia', 'Mexico'],
        axisTick: {
          alignWithLabel: true,
        },
      },
    ],
    yAxis: [
      {
        type: 'value',
      },
    ],
    series: [
      {
        name: 'Km2',
        type: 'bar',
        barWidth: '60%',
        data: this.manejarData(),
      },
    ],
  };


}
