import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { data } from './indian-states-data';
@Component({
  selector: 'app-refer',
  templateUrl: './refer.component.html',
  styleUrls: ['./refer.component.scss'],
})
export class ReferComponent implements OnInit {
  posts = [];
  data: { state: string; districts: string[] }[] = data;
  constructor(private postService: PostService) {}

  ngOnInit(): void {
    console.log(this.data);
    this.postService.getUser().subscribe((res: any[]) => {
      console.log(res);
      this.posts = res;
    });
  }
}
