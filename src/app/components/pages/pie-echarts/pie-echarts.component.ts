import { Component, OnInit } from '@angular/core';
import { EChartsOption } from "echarts";
import { country } from 'src/app/components/interface/paisesDB';

@Component({
  selector: 'app-pie-echarts',
  templateUrl: './pie-echarts.component.html',
  styleUrls: ['./pie-echarts.component.scss']
})
export class PieEchartsComponent implements OnInit {

  manejarData() {
    let dataSeries: any[] = [];
    const data = country.map(item => {
      console.log(item);
      dataSeries.push({ value: parseInt((item.population).replace(/,/g, "")), name: item.country });
    })
    console.log(dataSeries);
    return dataSeries;
  }

  ngOnInit(): void {
    this.manejarData();
  }

  chartOption: EChartsOption = {
    color: [
      '#00FFFF',
      '#FF1493',
      '#626c91',
      '#a0a7e6',
      '#7CFC00',
      '#FFA07A',
      '#FFA500',
      '#FF0000',
      '#E9967A',
      '#D3D3D3',
    ],
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
      orient: 'vertical',
      left: 100,
      itemGap: 15,
      icon: 'rect',
      textStyle: {
        align: 'left',
        padding: [0, 5, 0, 0]
      },
      data: ['China', 'India', 'USA', 'Indonesia', 'Pakistan', 'Brasil', 'Nigeria', 'Bangladesh', 'Rusia', 'Mexico'],
    },
    series: [
      {
        name: 'Población',
        type: 'pie',
        radius: ['40%', '90%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center',
              },
        emphasis: {
          label: {
            show: true,
            fontSize: 30,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false,
        },
        itemStyle: {
          borderWidth: 2,
          borderColor: '#fff'
        },
        data: this.manejarData()
      }
    ]
  };

}
