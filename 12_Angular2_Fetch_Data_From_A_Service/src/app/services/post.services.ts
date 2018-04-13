import {Injectable} from '@angular/core';
import{Post} from '../post';
import{Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map'; // rxjs/reactive extension javascript

@Injectable()
export class PostService{

   constructor(private _http:Http){
   
   }
   
   getPosts(){
     return this._http.get("https://jsonplaceholder.typicode.com/posts?_limit=5").map(res => res.json());
   }
   
   addPost(post:any){
     var headers = new Headers();
     headers.append('Content-Type','application/json');
     return this._http.post("https://jsonplaceholder.typicode.com/posts",post,{headers:headers}).map(res => res.json());
   }
}

