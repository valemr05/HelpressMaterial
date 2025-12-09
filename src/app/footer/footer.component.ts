// footer.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer">
      <div class="footer-content">
        <p class="copyright">© 2024 Helpress. All rights reserved.</p>
        
        <div class="footer-links">
          <a href="#" class="footer-link">Terms of Service</a>
          <a href="#" class="footer-link">Privacy Policy</a>
          <a href="#" class="footer-link">Contact Support</a>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background-color: var(--secondary-color);
      color: #d1d5db;
    }

    .footer-content {
      max-width: 1280px;
      margin: 0 auto;
      padding: 2rem 1.5rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      text-align: center;
      gap: 1rem;
      
      @media (min-width: 768px) {
        flex-direction: row;
        text-align: left;
      }
    }

    .copyright {
      margin: 0;
    }

    .footer-links {
      display: flex;
      gap: 1.5rem;
      flex-wrap: wrap;
      justify-content: center;
      
      @media (min-width: 768px) {
        justify-content: flex-end;
      }
    }

    .footer-link {
      color: #d1d5db;
      text-decoration: none;
      transition: color 0.2s;
      
      &:hover {
        color: white;
      }
    }
  `]
})
export class FooterComponent {}