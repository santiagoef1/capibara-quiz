import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { QuizService, Question } from '../../services/quiz';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
  imports: [CommonModule],
  standalone: true
})
export class QuizComponent {
  questions: Question[] = [];
  currentIndex = 0;
  score = 0;
  selected: number | null = null;
  feedback: 'correcto' | 'incorrecto' | null = null;
  showExplanation = false;

  constructor(private quiz: QuizService, private router: Router) {
    this.questions = this.quiz.getQuestions(); // shuffled questions
  }

  get current(): Question {
    return this.questions[this.currentIndex];
  }

  selectOption(i: number): void {
    // Prevent changing answer once explanation is shown
    if (this.showExplanation) return;

    this.selected = i;
    this.feedback = i === this.current.answerIndex ? 'correcto' : 'incorrecto';
    this.showExplanation = true;
  }

  next(): void {
    if (this.selected === this.current.answerIndex) {
      this.score++;
    }
    // Reset state for next question
    this.selected = null;
    this.feedback = null;
    this.showExplanation = false;
    this.currentIndex++;

    if (this.currentIndex >= this.questions.length) {
      this.router.navigate(['/resultado'], {
        state: { score: this.score, total: this.questions.length }
      });
    }
  }
}
