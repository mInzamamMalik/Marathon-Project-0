import { Component, OnInit } from '@angular/core';
import { FireService } from '../../providers/fire.service';
// import { Router, ActivatedRoute } from '@angular/router';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'app-view-resume',
    templateUrl: './view-resume.component.html',
    styleUrls: ['./view-resume.component.css']
})
export class ViewResumeComponent implements OnInit {

    constructor(
        private fs: FireService,
        private ActivatedRoute: ActivatedRoute,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    auth;
    resume;
    uid;

    ngOnInit() {
        this.route.params.subscribe((data: any) => {
            console.log("Router params: ", data)
            this.resume = this.fs.getList("users/" + data.uid + "/resume")
        });

        this.resume
        .catch(console.log)
        .subscribe(data => {
            console.log(data);
        })
    }
}
