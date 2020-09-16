import { Component, OnInit } from '@angular/core';
import { disciplina } from '../disciplina';

@Component({
  selector: 'app-disciplina',
  templateUrl: './disciplina.component.html',
  styleUrls: ['./disciplina.component.css']
})
export class DisciplinaComponent implements OnInit {
  list = disciplina;

  constructor() { }

  ngOnInit() {
  }

}