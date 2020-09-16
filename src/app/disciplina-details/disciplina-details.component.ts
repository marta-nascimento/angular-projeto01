import { Component, OnInit } from '@angular/core';
import { disciplina } from '../disciplina';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-disciplina-details',
  templateUrl: './disciplina-details.component.html',
  styleUrls: ['./disciplina-details.component.css']
})
export class DisciplinaDetailsComponent implements OnInit {
  disciplina;
  i;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.disciplina = disciplina[params.get('index')];
      this.i = params.get('index');
    }
    );
  }
}