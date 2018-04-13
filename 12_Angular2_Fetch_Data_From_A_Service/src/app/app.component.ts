import { Component } from '@angular/core';
import {PostService} from './services/post.services';
import {Post} from './post';
@Component({
  selector: 'my-app',
  template: `
  <div class="container">
  <h1 class="text-center">My Blog</h1>
      <form class="well" (submit)="addPost()">
        <input class="form-control" [(ngModel)]="title" type="text" name="title">
        <br><br>
        <textarea class="form-control" [(ngModel)]="body" type="text" name="body"></textarea>
        <br><br>
        <input class="btn btn-primary btn-block" type="submit">
      </form>
      <div>
         <div class="panel" *ngFor = "let post of posts">
              <h3>{{post.title}}</h3>
              <p>{{post.body}}</p>
         </div>
      </div>
  <div>
  `,
  providers: [PostService]
})

export class AppComponent  { 
   posts : Post[];
   
   title: string;
   body: string;
   
   constructor(private _PostService:PostService){
       this._PostService.getPosts().subscribe(posts => {
         this.posts = posts;
       });
   }
   
   addPost(){
       var newPost = {
          title: this.title;
          body: this.body;
      }
     this._PostService.addPost(newPost).subscribe(post => {
         this.posts.push(post);
     });
       return false;
       }
   
   
}
