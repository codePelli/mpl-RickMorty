import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from '../services/characters.service';

@Component({
  selector: 'app-character-details',
  standalone: true,
  imports: [],
  templateUrl: './character-details.component.html',
  styleUrl: './character-details.component.css'
})
export class CharacterDetailsComponent implements OnInit{

  characterId: number = 0;
  characterDetails: any;

  constructor(
    private route: ActivatedRoute,
    private charService: CharactersService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.characterId = +params['id'];
      this.loadCharacterDetails();
    });
  }

  loadCharacterDetails() {
    this.charService.getCharacterById(this.characterId).subscribe(
      (data) => {
        this.characterDetails = data;
      },
      (error) => {
        console.error('Error fetching character details:', error);
      }
    );
  }
}
