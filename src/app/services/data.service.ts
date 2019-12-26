import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { AnswerB } from '../models/answer-b.model';
import { AnswerC } from '../models/answer-c.model';
import { AnswerA } from '../models/answer-a.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(public httpClient: HttpClient) { }

  public getQuestionAData() {
    return of<AnswerA[]>([
      {
        city: 'Cochabamba',
        hotels:  [
          {
            name: 'Regina',
            totalIncome: 32000
          },
          {
            name: 'Cochabamba',
            totalIncome: 38000
          },
          {
            name: 'Portales',
            totalIncome: 5000
          },
        ],
        averageEarnings: 25000
      },
      {
        city: 'La Paz',
        hotels:  [
          {
            name: 'Terrado',
            totalIncome: 12000
          },
          {
            name: 'Casa Real',
            totalIncome: 19000
          },
          {
            name: 'Portales',
            totalIncome: 3000
          },
        ],
        averageEarnings: 11300
      }
    ]);
  }

  public getQuestionBData(): any {
    return of<AnswerB[]>([
      {
        city: 'Cochabamba',
        packages:  [
          {
            name: 'fin de año',
            percentage: 25
          },
          {
            name: 'inicio de año',
            percentage: 35
          },
          {
            name: 'sin paquete',
            percentage: 40
          },
        ]
      },
      {
        city: 'La paz',
        packages: [
          {
            name: 'fin de año',
            percentage: 15
          },
          {
            name: 'inicio de año',
            percentage: 25
          },
          {
            name: 'sin paquete',
            percentage: 65
          },
        ]
      }
    ]);
  }

  public getQuestionCData() {
    return of<AnswerC[]>([
      {
        city: 'Cochabamba',
        hotels:  [
          {
            name: 'Regina',
            incomePerYear: [
              {
                year: '2017',
                income: 11000
              },
              {
                year: '2018',
                income: 12000
              },
              {
                year: '2019',
                income: 9000
              },
            ]
          },
          {
            name: 'Cochabamba',
            incomePerYear: [
              {
                year: '2017',
                income: 6000
              },
              {
                year: '2018',
                income: 15000
              },
              {
                year: '2019',
                income: 17000
              },
            ]
          },
        ]
      },
      {
        city: 'La Paz',
        hotels:  [
          {
            name: 'Camino Plaza',
            incomePerYear: [
              {
                year: '2017',
                income: 8000
              },
              {
                year: '2018',
                income: 9000
              },
              {
                year: '2019',
                income: 5000
              },
            ]
          },
          {
            name: 'Colonia',
            incomePerYear: [
              {
                year: '2017',
                income: 7000
              },
              {
                year: '2018',
                income: 1000
              },
              {
                year: '2019',
                income: 3000
              },
            ]
          },
        ]
      },
    ]);
  }

}
