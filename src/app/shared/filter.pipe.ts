import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value : any[], filterName : string, propName : string): any[]{
    const result : any =[];
    if(!value || filterName==='' || propName===''){
      return value;
    }
    value.forEach((a:any)=>{
      if(a[propName].trim().toLowerCase().includes(filterName.toLocaleLowerCase())){
        result.push(a);
      }
    });
    return result;
  }

}
