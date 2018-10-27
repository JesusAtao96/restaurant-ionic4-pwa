import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value || !args) {
        return value;
    }

    return value.filter(item => item.name.toLocaleLowerCase().indexOf(args.toLocaleLowerCase()) !== -1);
  }

}
