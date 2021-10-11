import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatString',
})
export class FormatStringPipe implements PipeTransform {
  transform(value: string, ...args: any[]): string {
    console.log(args);
    return value.substring(args[0], args[1]) + '...';
  }
}
