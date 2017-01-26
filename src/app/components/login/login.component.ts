import { Component, OnInit } from '@angular/core';
import { FireService } from '../../providers/fire.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    constructor(private fs: FireService) { }

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
                    //check here user is student company or admin    
                }
            })
    }

}
