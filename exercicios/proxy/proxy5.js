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

let funcionarioProxy = new Proxy(new Funcionario('thborba1@gmail.com'), {

  set(target, prop, value, receiver) {

      console.log(`valor anterior ${target[prop]}, valor atual ${value}`);
      console.log(`propriedade alterada ${prop}`);
      return Reflect.set(target, prop, value, receiver);
  }
})

funcionarioProxy.email = 'askjhdkjasjkdhaskjd';