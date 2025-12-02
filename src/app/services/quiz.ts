import { Injectable } from '@angular/core';

export type Question = {
  text: string;
  options: string[];
  answerIndex: number;
  image?: string;
  explanation?: string;
};

@Injectable({ providedIn: 'root' })
export class QuizService {
  private questions: Question[] = [
    { text: '¿Dónde viven las capibaras?', options: ['En la nieve', 'En ríos y lagos', 'En el desierto'], answerIndex: 1, image: 'assets/capibaras/habitat.webp.png', explanation: 'Las capibaras viven cerca de ríos, lagos y pantanos porque son semiacuáticas.' },
    { text: '¿Qué les gusta hacer?', options: ['Correr sin parar', 'Tomar baños en el agua', 'Dormir en cuevas'], answerIndex: 1, image: 'assets/capibaras/agua.webp.png', explanation: 'Les encanta sumergirse en el agua para relajarse y protegerse del calor.' },
    { text: '¿Con qué animales conviven?', options: ['Cocodrilos y aves', 'Leones y hienas', 'Tiburones'], answerIndex: 0, image: 'assets/capibaras/convivir.webp.png', explanation: 'Son tan tranquilas que conviven con aves e incluso cocodrilos sin problemas.' },
    { text: '¿Qué comen las capibaras?', options: ['Carne de otros animales', 'Hierbas y plantas', 'Insectos'], answerIndex: 1, image: 'assets/capibaras/comida.webp.png', explanation: 'Son herbívoras y se alimentan principalmente de hierbas y plantas acuáticas.' },
    { text: '¿Cómo se protegen del calor?', options: ['Se esconden bajo tierra', 'Se meten al agua', 'Se cubren con hojas'], answerIndex: 1, image: 'assets/capibaras/calor.webp.png', explanation: 'Para refrescarse, se meten al agua y pasan largos ratos allí.' }
  ];

  // Método para barajar las preguntas
  private shuffle(array: Question[]): Question[] {
    return array
      .map(q => ({ q, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ q }) => q);
  }

  getQuestions(): Question[] {
    return this.shuffle([...this.questions]); // devuelve una copia barajada
  }
}