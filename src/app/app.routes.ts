import { RestaurantsComponent } from './restaurants/restaurants.component';
import { Routes } from "@angular/router";

import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';



export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'restaurants', component: RestaurantsComponent},
    {path: 'about', loadChildren: './about/about.module#AboutModule'},
    {path: '**', component: NotFoundComponent}   
]