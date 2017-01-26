import { Component, OnInit } from '@angular/core';
import { FireService } from '../../../providers/fire.service';

@Component({
    selector: 'app-students-list',
    templateUrl: './students-list.component.html',
    styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {

    constructor(private fs: FireService) { }
    students;

    ngOnInit() {
        this.students = this.fs.getList('users')
    }

}
