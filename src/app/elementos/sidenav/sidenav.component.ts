import { Component } from "@angular/core";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class Sidenav {
  showFiller = false;
  currencyTypes: string[] = ['Dolar (USD)',
                            'Euro  (EUR)',
                            'Rublo Russo  (RUB)',
                            'Libra Esterlina (GBP)',
                            'Yuan Chinês (CNY)',
                            'Dólar Canadense (CAD)',
                            'Iene Japonês (JPY)',
                            'Won Sul-Coreano (KRW)',
                            'Dólar Neozelandês (NZD)',
                            'Guarani Paraguaio (PYG)'
                          ];
 }