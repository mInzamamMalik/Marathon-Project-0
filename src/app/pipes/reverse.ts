import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'reverse',
    pure: false
})
export class ReversePipe implements PipeTransform {
    transform(value) {
        if (!value) {
            return;
        }
        console.log(value);
        return value.slice().reverse();
    }
}