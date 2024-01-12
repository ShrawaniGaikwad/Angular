import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { TechnologyComponent } from './technology/technology.component';
import { WrongRouteComponent } from './wrong-route/wrong-route.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,BooksComponent,TechnologyComponent,WrongRouteComponent,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Assignment14iii';
}
