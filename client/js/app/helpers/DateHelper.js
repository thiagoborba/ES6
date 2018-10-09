class DateHelper{

  constructor(){

    throw new Error('Esta classe não pode ser instânciada');
  }

  static textoParaData(texto){

    if(!this._validaTexto(texto)) 
      throw new Error('A data precisa ser no formato yyy-mm-dd');

    return new Date(
      ...texto.split('-')
      .map((item, indice) => item - indice % 2)
    );
  }

  static dataParaTexto(data){

    return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
  }

  static _validaTexto(texto){

    return /^\d{4}-\d{2}-\d{2}$/.test(texto)
  }
}