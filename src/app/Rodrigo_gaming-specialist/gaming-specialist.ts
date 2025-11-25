import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gaming-specialist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gaming-specialist.html',
  styleUrls: ['./gaming-specialist.css']
})
export class GamingSpecialistComponent {
  // --- Partículas ---
  particles = Array(25).fill(0);

  // --- Calculadora ---
  display = signal(''); // ✅ esto es un signal real
  buttons = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '+', '-', '*', '/'];

  press(value: string) {
    this.display.update(d => d + value);
  }

  clear() {
    this.display.set('');
  }

  calculate() {
    try {
      // eval no es ideal, pero funciona para una calculadora simple
      const result = Function(`"use strict"; return (${this.display()})`)();
      this.display.set(String(result));
    } catch {
      this.display.set('Error');
    }
  }
}
