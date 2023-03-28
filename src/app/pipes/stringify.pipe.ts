import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringify'
})
export class StringifyPipe implements PipeTransform {

  transform(value: any, separator = ', '): string {
    if (!value) {
      return 'no data found';
    }

    if (typeof value !== 'object') {
      return String(value);
    }
    return JSON.stringify(value);
  }

}
