import { Routes } from '@angular/router';
import { CharacterDetailsComponent } from './character/character-details/character-details.component';
import { CharacterListComponent } from './character/character-list/character-list.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
    {
        path:'',
        component: HomeComponent
    },
    {
        path:'home',
        component: HomeComponent
    },
    {
        path:'characters',
        component: CharacterListComponent
    },
    {
        path:'character-details/:id',
        component: CharacterDetailsComponent
    },
    {
        path:'about',
        component: AboutComponent
    }
];
