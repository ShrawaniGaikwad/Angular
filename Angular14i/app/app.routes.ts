import { Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { TechnologiesComponent } from './technologies/technologies.component';

export const routes: Routes = [
    {path:'technology',component:TechnologiesComponent},
    {path:'book',component:BooksComponent}
];
