// hero.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule
  ],
  
  templateUrl: '../hero.component.html',
  styleUrls: ['../hero.component.scss']
})
export class HeroComponent {
  onFindPro(): void {
    console.log('Find a Pro clicked');
    // Aquí iría la navegación o lógica
  }

  onContactSupport(): void {
    console.log('Contact Support clicked');
    // Aquí iría la navegación o lógica
  }
}