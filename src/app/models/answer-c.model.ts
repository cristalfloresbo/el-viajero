export interface AnswerC {
  city: string;
  hotels: Hotel[];
}

export interface Hotel {
  name: string;
  incomePerYear: Income[];
}

export interface Income {
  year: string;
  income: number;
}
