import { Component } from '@angular/core';
import { CursosFormComponent } from '../cursos-form/cursos-form.component';
import { CursosListComponent } from '../cursos-list/cursos-list.component';
import { CursosDetailsComponent } from '../cursos-details/cursos-details.component';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [CursosFormComponent, CursosListComponent, CursosDetailsComponent],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css',
})
export class CursosComponent {}
