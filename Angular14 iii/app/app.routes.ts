import { Routes } from '@angular/router';
import { TechnologyComponent } from './technology/technology.component'; 
import { BooksComponent } from './books/books.component';
import { WrongRouteComponent } from './wrong-route/wrong-route.component';

export const routes: Routes = [
    {path:'',component:TechnologyComponent},

    {path:'books',component:BooksComponent},
    {path:'**',component:WrongRouteComponent}
];
