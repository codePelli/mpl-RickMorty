import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../services/characters.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.css'
})
export class CharacterListComponent implements OnInit{
  characters: any[] = [];

  constructor(private charService: CharactersService){}

  ngOnInit(): void {
    
    this.charService.getCharacters().subscribe((data) => {
      console.log(data)
      this.characters = data;
    });
    
  }
}