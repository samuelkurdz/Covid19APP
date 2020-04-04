import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(ninjas: any, term: any): any {
    if(term == undefined) {
      return ninjas
    }
    return ninjas.filter(function(x) {
      return x.country.toLowerCase().includes(term.toLowerCase());
    })
  }

}
