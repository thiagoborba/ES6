let funcionario = {email: 'abc@abc.com'};

let funcionarioProxy = new Proxy(funcionario, {

  set(target, prop, value, receiver){

    console.log(`valor anterior ${receiver[prop]}, valor novo ${value}`);
    return Reflect.set(target, prop, value, receiver);
    
  }
});

funcionarioProxy.email = 'ajshdkjaskjfhajlshf';