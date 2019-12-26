import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label, SingleDataSet } from 'ng2-charts';
import { DataService } from '../services/data.service';
import { AnswerB, Package } from '../models/answer-b.model';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-pregunta-b',
  templateUrl: './pregunta-b.component.html',
  styleUrls: ['./pregunta-b.component.scss']
})
export class PreguntaBComponent implements OnInit {
  withPackagePercentage: number;
  formData: FormGroup;
  answers: AnswerB[];
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

  constructor(public dataService: DataService, public formBuilder: FormBuilder) {
    this.formData = this.formBuilder.group({
      city: new FormControl()
    });
  }

  ngOnInit() {
    this.dataService.getQuestionBData().subscribe((response: AnswerB[]) => {
      this.answers = response;
      this.formData.get('city').setValue(response[0]);
      this.updateGrapichData();
    });
  }

  updateGrapichData() {
    const answer = this.formData.get('city').value;
    this.withPackagePercentage = 0;
    this.pieChartLabels = [];
    this.pieChartData = [];
    answer.packages.forEach((item: Package) => {
      this.pieChartLabels.push(item.name);
      this.pieChartData.push(item.percentage);
      if (item.name.toLowerCase() !== 'sin paquete') {
        this.withPackagePercentage += item.percentage;
      }
    });
  }
}
