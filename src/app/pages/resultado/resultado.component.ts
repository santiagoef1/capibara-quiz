import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.scss'],
  imports: [CommonModule],
  standalone: true
})
export class ResultadoComponent {
  score = history.state.score ?? 0;
  total = history.state.total ?? 0;

  get perfecto(): boolean {
    return this.score === this.total;
  }

  restart(): void {
    this.score = 0;
    this.total = 0;
    history.replaceState({}, '');
    this.router.navigate(['/inicio']);
  }

  constructor(private router: Router) {}
}
