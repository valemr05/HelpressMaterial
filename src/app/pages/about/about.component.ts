// about.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from '../../header/header.component';
import { FooterComponent } from '../../footer/footer.component';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

interface Stat {
  value: string;
  label: string;
  icon: string;
}

interface Value {
  title: string;
  description: string;
  icon: string;
  color: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  stats: Stat[] = [
    {
      value: '10,000+',
      label: 'Happy Customers',
      icon: 'sentiment_satisfied'
    },
    {
      value: '500+',
      label: 'Verified Professionals',
      icon: 'verified'
    },
    {
      value: '50,000+',
      label: 'Services Completed',
      icon: 'task_alt'
    },
    {
      value: '4.9',
      label: 'Average Rating',
      icon: 'star'
    }
  ];

  values: Value[] = [
    {
      title: 'Trust & Safety',
      description: 'All professionals are thoroughly vetted and background-checked to ensure your safety and peace of mind.',
      icon: 'shield',
      color: 'var(--primary-color)'
    },
    {
      title: 'Quality Service',
      description: 'We maintain high standards by continuously monitoring service quality and customer satisfaction.',
      icon: 'workspace_premium',
      color: 'var(--accent-yellow)'
    },
    {
      title: 'Transparency',
      description: 'Clear pricing, honest reviews, and open communication throughout your service experience.',
      icon: 'visibility',
      color: 'var(--accent-green)'
    },
    {
      title: 'Customer First',
      description: 'Your satisfaction is our priority. We\'re here to support you every step of the way.',
      icon: 'favorite',
      color: '#e11d48'
    }
  ];

  team: TeamMember[] = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'https://i.pravatar.cc/300?img=5',
      bio: 'Sarah founded Helpress with a vision to make home services accessible and reliable for everyone.'
    },
    {
      name: 'Michael Chen',
      role: 'Chief Technology Officer',
      image: 'https://i.pravatar.cc/300?img=12',
      bio: 'Michael leads our tech team in building innovative solutions for seamless service connections.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Operations',
      image: 'https://i.pravatar.cc/300?img=9',
      bio: 'Emily ensures smooth operations and maintains relationships with our network of professionals.'
    },
    {
      name: 'David Thompson',
      role: 'Customer Success Manager',
      image: 'https://i.pravatar.cc/300?img=15',
      bio: 'David is dedicated to ensuring every customer has an exceptional experience with Helpress.'
    }
  ];
}