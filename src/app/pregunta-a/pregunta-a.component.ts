import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { AnswerA, Hotel } from '../models/answer-a.model';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-pregunta-a',
  templateUrl: './pregunta-a.component.html',
  styleUrls: ['./pregunta-a.component.scss']
})
export class PreguntaAComponent implements OnInit {
  hotelsToImprove: string[];
  hotelsToDontImprove: string[];
  formData: FormGroup;
  answers: AnswerA[];
  barChartOptions: ChartOptions = {
    maintainAspectRatio: false,
    responsive: true,
  };
  barChartLabels: Label[];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
  barChartData: ChartDataSets[];

  constructor(public dataService: DataService, public formBuilder: FormBuilder) {
    this.formData = this.formBuilder.group({
      city: new FormControl(),
    });
  }

  ngOnInit() {
    this.dataService.getQuestionAData().subscribe((response: AnswerA[]) => {
      this.answers = response;
      this.formData.get('city').setValue(response[0]);
      this.updateGrapichData();
    });
  }

  updateGrapichData() {
    const answer = this.formData.get('city').value;
    this.barChartData = [{ data: [0], label: ''}, { data: [answer.averageEarnings], label: 'Media', type: 'line' }];
    this.barChartLabels = ['FirstPlaceholder'];
    this.hotelsToDontImprove = [];
    this.hotelsToImprove = [];
    answer.hotels.forEach((item: Hotel) => {
      this.barChartLabels.push(item.name);
      this.barChartData[0].label = 'Ganancias Totales';
      this.barChartData[0].data.push(item.totalIncome);
      this.barChartData[1].data.push(answer.averageEarnings);
      if (item.totalIncome < answer.averageEarnings) {
        this.hotelsToDontImprove.push(item.name);
      } else {
        this.hotelsToImprove.push(item.name);
      }
    });
    this.barChartData[0].data.push(0);
    this.barChartData[1].data.push(answer.averageEarnings);
    this.barChartLabels.push('LastPlaceholder');
    this.barChartOptions = {
      maintainAspectRatio: false,
      responsive: true,
      scales: {
        xAxes: [
          {
            gridLines: { color: 'rgba(255,255,255,0.1)' },
            ticks: {
              fontColor: 'white',
              min: this.barChartLabels[1],
              max: this.barChartLabels[this.barChartLabels.length - 2],
            }
          }
        ],
        yAxes: [
          {
            gridLines: { color: 'rgba(255,255,255,0.1)' },
            ticks: { fontColor: 'white' }
          }
        ]
      },
      legend: {
        labels: {
          fontColor: 'white'
        }
      }
    };
  }
}
