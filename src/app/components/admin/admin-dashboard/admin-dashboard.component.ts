import { Component, OnInit } from '@angular/core';
import { FireService } from '../../../providers/fire.service';
import { PreloadingStrategy, Route, Router } from '@angular/router';
import { PostsComponent } from '../../posts/posts.component';


@Component({
    selector: 'app-admin-dashboard',
    templateUrl: './admin-dashboard.component.html',
    styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

    constructor(private fs: FireService, private router: Router) { }

    auth;
    post = {
        text: "",
        email: "",
        companyUid: "",
        date: this.fs.getDate()
    }
    ngOnInit() {
        this.fs.getUser().subscribe(auth => {
            console.log(auth);
            this.auth = auth;
        });
    }
    postVacancy() {
        // this.post.email = this.auth.auth.email;        
        this.post.companyUid = this.auth.uid;
        this.fs.pushData("posts/", this.post);
    }
}
