import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { 
    this.getPokemon();
    this.getAllPokemon();
  }
  getAllPokemon() {
    let allPokemon = this._http.get('https://pokeapi.co/api/v2/pokemon/?limit=964');
    allPokemon.subscribe(data => { 
      console.log("All the pokemon:", data);
      for(let pokemon of data['results']) {
        console.log(pokemon.name, pokemon.url);
      }
    });
  }
  getPokemon() {
    let bulbasaur = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
    
    bulbasaur.subscribe(data => console.log("Who's that Pokemon?! It's:", data));
  }
}
