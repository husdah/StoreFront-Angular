import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateName',
  standalone: true
})
export class TruncateNamePipe implements PipeTransform {

  transform(value: string, maxlength: number = 16, ellipsis: string = '...'): unknown {
    if(value.length > maxlength) {
      return value.slice(0, maxlength) + ellipsis;
    }
    return value
  }

}
