class ContaPoupanca extends Conta{

  upload(taxa){

    this._saldo = this._saldo + (taxa*2);
  }
}