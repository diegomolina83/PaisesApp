import { Component } from '@angular/core';
import { CapitalService } from '../../services/capital.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  termino: string = "";
  hayError: boolean = false;
  capital: any[] = [];

  constructor(private capitalService: CapitalService) { }


  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;

    this.capitalService.buscarCapital(termino)
      .subscribe((capital) => {
        console.log(capital);
        this.capital = capital;
      }, (err) => {
        this.hayError = true;
        this.capital = [];
      });

  }

  sugerencias(termino: string) {
    this.hayError = false;

  }

}
