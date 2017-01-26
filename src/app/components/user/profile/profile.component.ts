import { Component, OnInit } from '@angular/core';
import { FireService } from '../../../providers/fire.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

    constructor(private fs: FireService) { }
    data = {
        heading: "",
        description: ""
    }
    auth;
    resume;

    ngOnInit() {
        this.fs.getUser().subscribe(auth => {
            console.log(auth);
            this.auth = auth;
            this.resume = this.fs.getList("users/" + this.auth.uid + "/resume/")

        });
    }


    add() {
        this.fs.pushData("users/" + this.auth.uid + "/resume", this.data)
            .catch(error => {
                console.log("Error is: ", error);
            })
            .then(done => {
                //refresh UI
                console.log("done");               
            })
    }
    remove(item) {
        if (confirm("Do you really want to delete " + item.heading + "?"))
            this.fs.setData("users/" + this.auth.uid + "/resume/" + item.$key, null)
                .catch(error => {
                    console.log("Error is: ", error);
                })
                .then(done => {
                    // refresh UI
                    console.log("removed");
                })
    }
}
