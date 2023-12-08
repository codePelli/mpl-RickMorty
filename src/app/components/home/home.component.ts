import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../services/characters.service';
import { HeaderComponent } from '../../shared/component/header/header.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  characters: any[] = [];

  constructor(private charService: CharactersService){}

  ngOnInit(): void {
    
    this.charService.getCharacters().subscribe((data) => {
      console.log(data)
      this.characters = data.results;
    });
    
  }
}