import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  constructor() { }

  posts = [
    {title: 'First Post', content: " This is the first Post Content"},
    {title: 'Second Post', content: "This is the Second post content"},
    {title: 'Third POST', CONTENT: "This is the Third post content"}
  ]
  ngOnInit(): void {
  }

}