import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataFormat'
})
export class DataFormatPipe implements PipeTransform {

  transform(value: number): String {
    const d = new Date();
    d.setTime(value);
    const year = d.getFullYear();
    const month = d.getMonth() + 1;
    const date = d.getDate();
    return (year + '-' + (month < 10 ? ('0' + month) : month) + '-' +
    (date < 10 ? ('0' + date) : date));
  }

}
