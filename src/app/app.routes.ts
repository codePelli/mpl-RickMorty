import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';

export const routes: Routes = [
    {
        path:'home',
        component: HomeComponent
    },
    {
        path:'character-details/:id',
        component: CharacterDetailsComponent
    }
];
