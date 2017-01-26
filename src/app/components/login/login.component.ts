import { Component, OnInit } from '@angular/core';
import { FireService } from '../../providers/fire.service';
import { PreloadingStrategy, Route, Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    constructor(private fs: FireService, private router: Router) { }

    ngOnInit() {
    }

    data = {
        email: "",
        password: ""
    }

    login() {
        this.fs.doLogin(this.data.email, this.data.password)
            .catch((error: any) => {
                alert(error.code);
                console.log(error);
            })
            .then((user) => {
                console.log("user: ", user);
                if (user) {
                    this.fs.getData(user.uid)
                        .subscribe(userData => {
                            console.log("user data: ", userData);

                            switch (userData.role) {
                                case "admin":
                                    this.router.navigate(['/admin-dashboard']);
                                    break;
                                case "user":
                                    this.router.navigate(['/user-dahsboard']);
                                    break;
                                case "company":
                                    this.router.navigate(['/company-dashboard']);
                                    break;
                                default:
                                    alert("invalid user role");
                            }

                        });
                }
            })
    }

}
