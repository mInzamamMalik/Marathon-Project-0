import { Component, OnInit } from '@angular/core';
import { FireService } from '../../../providers/fire.service';
import { PreloadingStrategy, Route, Router } from '@angular/router';

@Component({
    selector: 'app-user-signup',
    templateUrl: './user-signup.component.html',
    styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {

    constructor(private fs: FireService, private router: Router) { }

    ngOnInit() {
    }
    
    data = {
        name: "",
        email: "",
        password: "",
        role: "user"
    }

    signupAsStudent() {

        console.log(this.data);
        this.fs.doSignup(this.data.email, this.data.password)
            .then(user => {
                console.log("user: ", user);
                if (user != undefined) {
                    console.log("user created");
                    this.fs.setData(user.uid, {
                        name: this.data.name,
                        email: user.auth.email,
                        role: this.data.role
                    })
                        .catch(error => {
                            console.log("Error is: ", error);
                        })
                        .then(data => {
                            this.router.navigate(['/login']);
                        });
                }
            })
            .catch((error: any) => {
                alert(error);
                console.log(error);
            })
    }

}
