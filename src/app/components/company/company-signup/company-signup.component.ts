import { Component, OnInit } from '@angular/core';
import { FireService } from '../../../providers/fire.service';

@Component({
    selector: 'app-company-signup',
    templateUrl: './company-signup.component.html',
    styleUrls: ['./company-signup.component.css']
})
export class CompanySignupComponent implements OnInit {

    constructor(private fs: FireService) { }

    ngOnInit() {
    }

    data = {
        name: "",
        email: "",
        password: "",
        role: "company"
    }

    signupAsCompany() {
        console.log(this.data);
        this.fs.doSignup(this.data.email, this.data.password)
            .catch((error: any) => {
                alert(error);
                console.log(error);
            })
            .then((user) => {
                console.log("user: ", user);
                if (user) {
                    //add data to firebase here    
                }
            })
    }
}
