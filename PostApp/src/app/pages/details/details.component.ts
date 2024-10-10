import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class DetailsComponent implements OnInit {
  postId: number; // Dichiara una variabile per l'ID del post
  post: any; // Dichiara una variabile per il post

  constructor(private route: ActivatedRoute, private postService: PostService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.postId = +params['id']; // Ottieni l'ID dal parametro dell'URL
      this.loadPost(); // Carica i dettagli del post
    });
  }

  async loadPost() {
    try {
      this.post = await this.postService.getPostById(this.postId); // Carica il post
      console.log(this.post); // Verifica il post caricato
    } catch (error) {
      console.error('Error loading post details:', error);
    }
  }
}
