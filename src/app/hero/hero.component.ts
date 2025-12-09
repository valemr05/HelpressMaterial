// header.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule
  ],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  menuItems = [
    { label: 'Services', route: '/services' },
    { label: 'About Us', route: '/about' },
    { label: 'Contact', route: '/contact' }
  ];
  onFindPro(): void {
    console.log('Find a Pro clicked');
    // Aquí iría la navegación o lógica
  }

  onContactSupport(): void {
    console.log('Contact Support clicked');
    // Aquí iría la navegación o lógica
  }  
}