class Funcionario {

  constructor(email) {
    this._email = email;
  }

  get email() {
    return this._email;
  }

  set email(email) {
    this._email = email;
  }
}

let funcionario = new Proxy(new Funcionario('abc@abc.com'), {

  get(target, prop, receiver){

    console.log('Armadilha aqui!');
    return Reflect.get(target, prop, receiver);
  }

});

console.log(funcionario.email);