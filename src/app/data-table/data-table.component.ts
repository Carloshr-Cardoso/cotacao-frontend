import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  position: number;
  name: string;
  currency: number;
}


export const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Dolar (USD)', currency: 1.0079},
  {position: 2, name: 'Euro  (EUR)', currency: 4.0026},
  {position: 3, name: 'Rublo Russo  (RUB)', currency: 6.941},
  {position: 4, name: 'Libra Esterlina (GBP)', currency: 9.0122},
  {position: 5, name: 'Yuan Chinês (CNY)', currency: 10.811},
  {position: 6, name: 'Dólar Canadense (CAD)', currency: 12.0107},
  {position: 7, name: 'Iene Japonês (JPY)', currency: 14.0067},
  {position: 8, name: 'Won Sul-Coreano (KRW)', currency: 15.9994},
  {position: 9, name: 'Dólar Neozelandês (NZD)', currency: 18.9984},
  {position: 10, name: 'Guarani Paraguaio (PYG)', currency: 20.1797},
];

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent  {

  displayedColumns: string[] = ['position', 'name', 'currency'];
  dataSource = ELEMENT_DATA;

}
