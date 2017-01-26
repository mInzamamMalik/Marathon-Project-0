import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, AuthProviders, AuthMethods } from 'angularfire2';
import { PreloadingStrategy, Route, Router } from '@angular/router';

@Injectable()
export class FireService {

    constructor(private af: AngularFire, private router: Router) {
        console.log("Fire Service initialized");
    }

    doLogin(email, password) {
        return this.af.auth.login(
            {
                email: email,
                password: password
            },
            {
                provider: AuthProviders.Password,
                method: AuthMethods.Password,
            })
    }
    doSignup(email, password) {
        return this.af.auth.createUser({ email: email, password: password })
        // .catch((error: any) => {
        //     console.log(error);
        // })
        // .then((user: any) => {
        //     var user = JSON.parse(JSON.stringify(user))// removing prototypes and making it plain object
        //     this.af.database.object('/users/' + user.uid).set(user);
        //     console.log(user);

        //     this.router.navigate(['/login']);
        // });
    }

    setData(path, data): firebase.Promise<void> {
        return this.af.database.object('/' + path).set(data);
    }
    getData(path) {
        return this.af.database.object('/' + path);
    }
}
