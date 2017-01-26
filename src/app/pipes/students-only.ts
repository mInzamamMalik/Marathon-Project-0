
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'onlyStudents',
    pure: false
})
export class onlyStudents implements PipeTransform {
    transform(value) {
        if (!value) {
            return;
        } else {
            let data = value;
            for (let i = 0; i < data.length; i++) {
                if (data[i].role !== "user") {
                    data.splice(i, 1);
                }
            }
            return data;
        }
    }
}


