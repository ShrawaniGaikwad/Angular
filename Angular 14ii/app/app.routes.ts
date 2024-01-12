import { Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { TechnologyComponent } from './technology/technology.component';

export const routes: Routes = [
    {path:'technology',component:TechnologyComponent},
    {path:'book',component:BooksComponent}
];
