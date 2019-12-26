import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, SingleDataSet } from 'ng2-charts';
import { DataService } from '../services/data.service';
import { AnswerB, Package } from '../models/answer-b.model';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AnswerC, Hotel } from '../models/answer-c.model';

@Component({
  selector: 'app-pregunta-c',
  templateUrl: './pregunta-c.component.html',
  styleUrls: ['./pregunta-c.component.scss']
})
export class PreguntaCComponent implements OnInit {
  totalIncome: number;
  formData: FormGroup;
  answers: AnswerC[];
  pieChartOptions: ChartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    legend: {
      labels: {
        fontColor: 'white'
      }
    }
  };
  pieChartLabels: Label[] = [];
  pieChartData: SingleDataSet = [];
  pieChartType: ChartType = 'pie';
  pieChartLegend = true;
  pieChartPlugins = [];
  years = [{year: '2017', value: 0}, {year: '2018', value: 1}, {year: '2019', value: 2}];

  barChartOptions: ChartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    legend: {
      labels: {
        fontColor: 'white'
      }
    },
    scales: {
      xAxes: [
        {
          gridLines: { color: 'rgba(255,255,255,0.1)' },
          ticks: {
            fontColor: 'white',
          }
        }
      ],
      yAxes: [
        {
          gridLines: { color: 'rgba(255,255,255,0.1)' },
          ticks: {
            fontColor: 'white',
            beginAtZero: true
          },
        }
      ]
    }
  };
  barChartLabels: Label[];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
  barChartData: ChartDataSets[];

  constructor(public dataService: DataService, public formBuilder: FormBuilder) {
    this.formData = this.formBuilder.group({
      city: new FormControl(),
      year: new FormControl(0)
    });
  }

  ngOnInit() {
    this.dataService.getQuestionCData().subscribe((response: AnswerC[]) => {
      this.answers = response;
      this.formData.get('city').setValue(response[0]);
      this.updateBarGrapichData();
    });
  }

  updateGrapichData() {
    const answer = this.formData.get('city').value;
    const yearIndex = this.formData.get('year').value;
    this.pieChartLabels = [];
    this.pieChartData = [];
    this.totalIncome = 0;
    answer.hotels.forEach((item: Hotel) => {
      this.pieChartLabels.push(item.name);
      this.pieChartData.push(item.incomePerYear[yearIndex].income);
      this.totalIncome += item.incomePerYear[yearIndex].income;
    });
  }

  updateBarGrapichData() {
    const answer = this.formData.get('city').value;
    this.barChartData = [{ data: [], label: '2017'}, { data: [], label: '2018'}, { data: [], label: '2019' }];
    this.barChartLabels = [];
    answer.hotels.forEach((hotel: Hotel) => {
      this.barChartLabels.push(hotel.name);
      this.barChartData[0].data.push(hotel.incomePerYear[0].income);
      this.barChartData[1].data.push(hotel.incomePerYear[1].income);
      this.barChartData[2].data.push(hotel.incomePerYear[2].income);
    });
    this.updateGrapichData();
  }

  getCityAndTotalIncome()  {
    const yearIndex = this.formData.get('year').value;
    let year: number;
    if (yearIndex === 0) {
      year = 2017;
    } else if ( yearIndex === 1) {
      year = 2018;
    } else {
      year = 2019;
    }
    return `El año ${year} entre todos los hoteles en la ciudad de ${this.formData.get('city').value.city}
            el total de ganancias fue de: ${this.totalIncome}`;
  }
}
