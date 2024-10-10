// post.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // Questo servizio è disponibile a livello globale
})
export class PostService {
  private apiUrl = 'https://api.example.com/posts'; // Sostituisci con l'URL della tua API

  constructor() {}

  // Metodo per ottenere tutti i post
  async getPosts() {
    try {
      const response = await fetch(this.apiUrl);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data; // Restituisci i dati dei post
    } catch (error) {
      console.error('Fetch error:', error);
      throw error; // Rilancia l'errore per gestirlo a livello di chiamata
    }
  }

  // Metodo per ottenere un singolo post per ID
  async getPostById(id: number) {
    try {
      const response = await fetch(`${this.apiUrl}/${id}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data; // Restituisci i dati del post
    } catch (error) {
      console.error('Fetch error:', error);
      throw error; // Rilancia l'errore per gestirlo a livello di chiamata
    }
  }


}
