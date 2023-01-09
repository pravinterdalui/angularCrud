import { Component } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
@Component({
  selector: 'app-getdata',
  templateUrl: './getdata.component.html',
  styleUrls: ['./getdata.component.scss']
})
export class GetdataComponent {
  posts:any;

  constructor(private service:PostService) {}
  
  ngOnInit() {
      this.service.getPosts()
        .subscribe(response => {
          this.posts = response;
        });
  }
  
}
