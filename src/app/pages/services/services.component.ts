// services.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipsModule } from '@angular/material/chips';
import { HeaderComponent } from '../../header/header.component';
import { FooterComponent } from '../../footer/footer.component';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  iconColor: string;
  bgColor: string;
  category: string;
  price: string;
  rating: number;
  reviewsCount: number;
  features: string[];
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatChipsModule,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  searchQuery = '';
  selectedCategory = 'All';
  
  categories = [
    'All',
    'Plumbing',
    'Electrical',
    'Landscaping',
    'Cleaning',
    'Painting',
    'Carpentry',
    'HVAC',
    'Roofing'
  ];

  allServices: Service[] = [
    {
      id: 1,
      title: 'Plumbing Services',
      description: 'Expert plumbing solutions for all your home needs. From leak repairs to complete installations.',
      icon: 'plumbing',
      iconColor: 'var(--primary-color)',
      bgColor: 'rgba(229, 77, 46, 0.1)',
      category: 'Plumbing',
      price: 'From $75/hr',
      rating: 4.8,
      reviewsCount: 324,
      features: ['24/7 Emergency Service', 'Licensed Professionals', 'Same-Day Service']
    },
    {
      id: 2,
      title: 'Electrical Services',
      description: 'Safe and reliable electrical work for residential and commercial properties.',
      icon: 'electrical_services',
      iconColor: 'var(--accent-yellow)',
      bgColor: 'rgba(244, 183, 64, 0.1)',
      category: 'Electrical',
      price: 'From $85/hr',
      rating: 4.9,
      reviewsCount: 412,
      features: ['Certified Electricians', 'Code Compliance', 'Free Estimates']
    },
    {
      id: 3,
      title: 'Landscaping & Garden Care',
      description: 'Transform your outdoor space with professional landscaping and maintenance services.',
      icon: 'grass',
      iconColor: 'var(--accent-green)',
      bgColor: 'rgba(42, 89, 72, 0.1)',
      category: 'Landscaping',
      price: 'From $60/hr',
      rating: 4.7,
      reviewsCount: 289,
      features: ['Garden Design', 'Lawn Maintenance', 'Tree & Shrub Care']
    },
    {
      id: 4,
      title: 'House Cleaning',
      description: 'Thorough and reliable cleaning services to keep your home spotless.',
      icon: 'cleaning_services',
      iconColor: '#3b82f6',
      bgColor: 'rgba(59, 130, 246, 0.1)',
      category: 'Cleaning',
      price: 'From $50/hr',
      rating: 4.9,
      reviewsCount: 567,
      features: ['Eco-Friendly Products', 'Flexible Scheduling', 'Satisfaction Guaranteed']
    },
    {
      id: 5,
      title: 'Interior & Exterior Painting',
      description: 'Professional painting services for a fresh new look to your property.',
      icon: 'format_paint',
      iconColor: '#8b5cf6',
      bgColor: 'rgba(139, 92, 246, 0.1)',
      category: 'Painting',
      price: 'From $45/hr',
      rating: 4.6,
      reviewsCount: 198,
      features: ['Quality Materials', 'Clean Finish', 'Color Consultation']
    },
    {
      id: 6,
      title: 'Carpentry & Woodwork',
      description: 'Custom carpentry solutions from repairs to complete custom builds.',
      icon: 'construction',
      iconColor: '#d97706',
      bgColor: 'rgba(217, 119, 6, 0.1)',
      category: 'Carpentry',
      price: 'From $70/hr',
      rating: 4.8,
      reviewsCount: 156,
      features: ['Custom Designs', 'Quality Craftsmanship', 'Warranty Included']
    },
    {
      id: 7,
      title: 'HVAC Services',
      description: 'Heating, ventilation, and air conditioning installation and repair services.',
      icon: 'ac_unit',
      iconColor: '#06b6d4',
      bgColor: 'rgba(6, 182, 212, 0.1)',
      category: 'HVAC',
      price: 'From $90/hr',
      rating: 4.7,
      reviewsCount: 234,
      features: ['Energy Efficient Solutions', 'Regular Maintenance', '24/7 Emergency Repairs']
    },
    {
      id: 8,
      title: 'Roofing Services',
      description: 'Complete roofing solutions including repairs, replacements, and inspections.',
      icon: 'roofing',
      iconColor: '#64748b',
      bgColor: 'rgba(100, 116, 139, 0.1)',
      category: 'Roofing',
      price: 'From $95/hr',
      rating: 4.9,
      reviewsCount: 178,
      features: ['Weather Resistant', 'Warranty Coverage', 'Free Inspection']
    }
  ];

  filteredServices: Service[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.filterServices();
  }

  filterServices(): void {
    let filtered = this.allServices;

    // Filter by category
    if (this.selectedCategory !== 'All') {
      filtered = filtered.filter(s => s.category === this.selectedCategory);
    }

    // Filter by search query
    if (this.searchQuery.trim()) {
      const query = this.searchQuery.toLowerCase();
      filtered = filtered.filter(s => 
        s.title.toLowerCase().includes(query) ||
        s.description.toLowerCase().includes(query) ||
        s.category.toLowerCase().includes(query)
      );
    }

    this.filteredServices = filtered;
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
    this.filterServices();
  }

  onSearchChange(): void {
    this.filterServices();
  }

  viewServiceDetails(serviceId: number): void {
    this.router.navigate(['/service', serviceId]);
  }

  bookService(serviceId: number): void {
    console.log('Book service:', serviceId);
    // Aquí iría la navegación al sistema de reservas
    // this.router.navigate(['/book', serviceId]);
  }
}