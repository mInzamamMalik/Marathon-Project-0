import { Component, OnInit } from '@angular/core';
import { FireService } from '../../../providers/fire.service';
import { PreloadingStrategy, Route, Router } from '@angular/router';
import { PostsComponent } from '../../posts/posts.component';

@Component({
    selector: 'app-company-dashboard',
    templateUrl: './company-dashboard.component.html',
    styleUrls: ['./company-dashboard.component.css']
})
export class CompanyDashboardComponent implements OnInit {

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
        this.post.email = this.auth.auth.email;        
        this.post.companyUid = this.auth.uid;
        this.fs.pushData("posts/", this.post);
    }

}
