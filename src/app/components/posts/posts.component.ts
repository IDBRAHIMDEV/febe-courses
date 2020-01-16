import { PostService } from './../../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  display: boolean = false;
  posts = [];

  myPost = {
    title: '',
    body: ''
  }
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getAllPosts();
  }

  getAllPosts() {
    this.postService.getPosts()
        .subscribe((response: any[]) => {
          console.log(response);
          this.posts = response;
        })
  }

  savePost() {
    this.postService.persistPost(this.myPost)
        .subscribe(response => {
          this.posts = [response, ...this.posts];
          this.display = false;
          this.myPost = {
            title: '',
            body: ''
          }
        })
  }

  deleteOnePost(id) {
    this.postService.destroyPost(id)
        .subscribe(() => {

          this.posts = this.posts.filter((post) => post.id !== id);

        })
  }

  showForm() {
    this.display = !this.display;
  }
}
