import { Component, OnInit, Input } from '@angular/core';
import _ from 'lodash';
import { THEME_COLORS } from '../../shared/theme.colors';

const theme = 'Bright'
@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  constructor() { }

  @Input() inputData; any;
  @Input() limit: number;

  pieChartData: number[]; // = [350,450,120];
  pieChartLabels: string[]; // = ['XYZ logistics', 'Main St. Bakery', 'Acme Inc.'];
  colors: any[] = [
    {
      backgroundColor: this.themeColors(theme), // ['#26547c', '#ff6b6b', '#ffd166']
      borderColor: '#111'
    }
  ];
  pieChartType = 'doughnut';

  ngOnInit(): void {
    this.parceChartData(this.inputData, this.limit);
  }

  parceChartData(res:any, limit?:number)
  {
    const allData = res.slice(0,limit);
    this.pieChartData = allData.map(x =>_.values(x)[1]);  //uporaba lodash knjižnice, da dostopaš do lista preko indeka namesto imena
    this.pieChartLabels = allData.map(x => _.values(x)[0]);
  }

  themeColors(setName:string): string[] {
    const c = THEME_COLORS.slice(0)
    .find(set => set.name === setName).colorSet;

    return c;
  }

}
