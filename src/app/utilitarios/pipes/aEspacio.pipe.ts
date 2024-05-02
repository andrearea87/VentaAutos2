import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'aEspacio'
})
export class AEspacioPipe implements PipeTransform {

  transform(cadena: string, busca: string): string {
    const valorReemplaza=" ";
    return cadena.replace(busca,valorReemplaza);
  }

}
