import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css',
})
export class DataBindingComponent {
  url: string = 'http://loiane.com';
  cursoAngular: boolean = true;
  urlImage = 'https://picsum.photos/seed/picsum/200/300';

  getValue() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }
}
