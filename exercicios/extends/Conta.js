class Conta{

  constructor(saldo){

    this._saldo = saldo;
  }

  get saldo(){

    return this._saldo;
  }

  update(texa){

    throw new Error('Método upload deve ser implementado');
  }
}