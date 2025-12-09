// services.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

interface Service {
  icon: string;
  title: string;
  description: string;
  iconColor: string;
  bgColor: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule
  ],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  services: Service[] = [
    {
      icon: 'plumbing',
      title: 'Plumbing',
      description: 'Fixing leaks, clogs, and installations. Our certified plumbers are ready to help, 24/7.',
      iconColor: 'var(--primary-color)',
      bgColor: 'rgba(229, 77, 46, 0.1)'
    },
    {
      icon: 'electrical_services',
      title: 'Electrical',
      description: 'Safe and reliable electrical work, from new outlets to complete home rewiring projects.',
      iconColor: 'var(--accent-yellow)',
      bgColor: 'rgba(244, 183, 64, 0.1)'
    },
    {
      icon: 'grass',
      title: 'Landscaping',
      description: 'Transform your outdoor space with our gardening, lawn care, and design services.',
      iconColor: 'var(--accent-green)',
      bgColor: 'rgba(42, 89, 72, 0.1)'
    }
  ];
}