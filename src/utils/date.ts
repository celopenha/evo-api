export class DateUtils {


  static minuteToMillis(minute: number){
    return minute * 60000;
  }

  static milisToHours(milis: number){
  }

  static milisToMinutes(milis: number){
  }
  static timestampToDate(timestamp: number) {
    let data = new Date(timestamp);
    let ano = data.getFullYear();
    let mes = data.getMonth() + 1;
    let dia = data.getDate();
    let hora = data.getHours();
    let minuto = data.getMinutes();
    let segundo = data.getSeconds();

    let dataFormatada = ano + '-' + (mes < 10 ? '0' : '') + mes + '-' + (dia < 10 ? '0' : '') + dia + ' ' +
      (hora < 10 ? '0' : '') + hora + ':' + (minuto < 10 ? '0' : '') + minuto + ':' + (segundo < 10 ? '0' : '') + segundo;

    return dataFormatada;
  }
}