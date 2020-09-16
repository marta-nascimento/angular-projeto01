import { Component, OnInit } from '@angular/core';

import { disciplina } from '../disciplina';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-disciplina-details-notas',
  templateUrl: './disciplina-details-notas.component.html',
  styleUrls: ['./disciplina-details-notas.component.css']
})
export class DisciplinaDetailsNotasComponent implements OnInit {
  disciplina;
  numero;
  semestre;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.numero = params.get('i');
      this.semestre = params.get('index');
      this.disciplina = disciplina[this.semestre];
    }
    );
  }
}