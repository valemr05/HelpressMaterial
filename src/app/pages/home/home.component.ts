// home.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../header/header.component';
import { HeaderComponent } from '../../hero/hero.component';
import { ServicesComponent } from '../../services/services.component';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent,
    ServicesComponent,
    FooterComponent
  ],
  template: `
    <div class="home-container">
      <app-header></app-header>
      <main>
        <app-hero></app-hero>
        <app-services></app-services>
      </main>
      <app-footer></app-footer>
    </div>
  `,
  styles: [`
    .home-container {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }

    main {
      flex-grow: 1;
    }
  `]
})
export class HomeComponent {}