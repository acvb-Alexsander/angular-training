import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';
import { CursosFormComponent } from './modules/cursos-form/cursos-form.component';
import { CursosComponent } from './modules/cursos/cursos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MeuPrimeiroComponent,
    MeuPrimeiro2Component,
    CursosFormComponent,
    CursosComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Hello,World';
}
