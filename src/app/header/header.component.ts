import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterModule,      // 👈 Necesario para routerLink
    MatToolbarModule,  // Para <mat-toolbar>
    MatButtonModule    // Para <button mat-button>
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'] // Ojo, es styleUrls en plural
})
export class HeaderComponent {}
