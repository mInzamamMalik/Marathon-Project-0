import { Component, OnInit } from '@angular/core';
import { FireService } from '../../../providers/fire.service';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

    constructor(private fs: FireService) { }
    users;

    ngOnInit() {
        this.users = this.fs
            .getList('users')
            .filter((user => {
                //don't add admin in list
                if (user.role !== "admin") {
                    return true;
                }
            }));
    }
    deleteUser(key) {
        console.log("key is: ", key);
        //delete user here
    }
}
