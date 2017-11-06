import { Component } from '@angular/core';
import { PostService } from '../../service/posts.service';

@Component({
  moduleId:module.id,
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [PostService]
})

export class UserComponent {

  name: String;
  email: String;
  address: address;
  hobbies: String[];
  showHobby: boolean;
  posts: Post[];

  constructor(private postService: PostService) {
    this.name = 'Priyank Shukla';
    this.email = 'priyank.shukla@jktech.com';
    this.address = {
      street: 'Lucknow road',
      city: 'Hardoi',
      country: 'India'
    }
    this.hobbies = ['swimming', 'sports', 'music'];
    this.showHobby = false;

    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  onShowHobbyClick() {
    if (this.showHobby == true) {
      this.showHobby = false;
    } else {
      this.showHobby = true;
    }
  }

  addHobby(hobby) {
    console.log('Adding hobby-----------------');
    this.hobbies.push(hobby);
  }

  removeHobby(i) {
    this.hobbies.splice(i, 1);
  }
}

interface address {
  street: String;
  city: String;
  country: String;
}

interface Post {
  id: String;
  title: String;
  body: String;
}
