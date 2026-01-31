import { Component, OnInit } from '@angular/core';
import { CursosDetailsComponent } from '../cursos-details/cursos-details.component';

@Component({
  selector: 'app-cursos-list',
  standalone: true,
  imports: [CursosDetailsComponent],
  templateUrl: './cursos-list.component.html',
  styleUrl: './cursos-list.component.css',
})
export class CursosListComponent implements OnInit {
  nomePortal: string;
  cursos: string[] = ['Java', 'Ext Js', 'Angular.js', 'Python'];

  constructor() {
    this.nomePortal = 'http://loiane.training';
    this;
  }

  ngOnInit(): void {}
}
