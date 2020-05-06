import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  enteredValue = '';
  newPost = 'No Content';
  //onAddPost(postInput : HTMLTextAreaElement){
    //alert(" Save Post Button Clicked");
    //console.dir(postInput);
    //this.newPost = 'The user\'s post';
    //this.newPost = postInput.value;
  //}
  onAddPost(){
    this.newPost = this.enteredValue;
  }

}
