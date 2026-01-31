import { Component, OnInit } from '@angular/core';
import { CursosDetailsComponent } from '../cursos-details/cursos-details.component';
import { CursosService } from '../../shared/services/cursos.service';

@Component({
  selector: 'app-cursos-list',
  standalone: true,
  imports: [CursosDetailsComponent],
  templateUrl: './cursos-list.component.html',
  styleUrl: './cursos-list.component.css',
})
export class CursosListComponent implements OnInit {
  nomePortal: string;
  cursos: string[];
  constructor(private cursosService: CursosService) {
    this.nomePortal = 'http://loiane.training';
    this.cursos = this.cursosService.getCursos();
  }

  ngOnInit(): void {}
}
