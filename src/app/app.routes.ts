import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { QuizComponent } from './pages/quiz/quiz.component';
import { ResultadoComponent } from './pages/resultado/resultado.component';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'resultado', component: ResultadoComponent },
  { path: '**', redirectTo: '' }
];
