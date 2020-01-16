import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get("http://localhost:5000/posts");
  }

  persistPost(data) {
    return this.http.post("http://localhost:5000/posts", data);
  }

  destroyPost(id) {
    return this.http.delete(`http://localhost:5000/posts/${id}`)
  }
}
