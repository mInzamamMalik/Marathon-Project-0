import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'studentAndCompany',
    pure: false
})
export class studentAndCompany implements PipeTransform {
    transform(value) {
        if (!value) {
            return;
        } else {
            let data = value;
            for (let i = 0; i < data.length; i++) {
                if (data[i].role === "admin") {
                    data.splice(i, 1);
                }
            }
            return data;
        }
    }
}


