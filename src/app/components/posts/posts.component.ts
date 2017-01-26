import { Component, OnInit } from '@angular/core';
import { FireService } from '../../providers/fire.service';
import { ReversePipe } from '../../pipes/reverse';

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

    constructor(private fs: FireService) { }
    posts;

    ngOnInit() {
        this.posts = this.fs.getList('posts');
    }
}
