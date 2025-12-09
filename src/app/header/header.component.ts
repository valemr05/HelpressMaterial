import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    RouterLink,
    RouterLinkActive,
    MatDividerModule,
    MatMenuModule
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']  // ← usa tu CSS real
})
export class HeaderComponent {
  menuItems = [
    { label: 'Home', link: '/' },
    { label: 'Services', link: '/services' },
    { label: 'About', link: '/about' },
    { label: 'Contact', link: '/contact' }
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
