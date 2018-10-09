class NegociacaoController {

  constructor(){
    let $ = document.querySelector.bind(document);
    this._form = $('#form');
    this._inputData = $('#data');
    this._inputQuantidade = $('#quantidade');
    this._inputValor = $('#valor')

    this._listaNegociacao = new Bind(
      new ListaNegociacao(),
      new NegociacaoView($('#negociacaoView')),
      'adiciona', 'esvazia'
    );
    this._mensagem = new Bind(
      new Mensagem(),
      new MensagemView($('#mensagemView')),
      'texto'
    );
  }

  adiciona(){
    event.preventDefault();
    this._listaNegociacao.adiciona(this._criaNegociacao());
    this._mensagem.texto = 'Negociação adicionada com sucesso!';
    this._limpaFormulario();
  }

  apagar(){
    this._listaNegociacao.esvazia();
    this._mensagem.texto = 'Negociações apagadas com sucesso!';
  }

  _criaNegociacao(){
    return new Negociacao(
      DateHelper.textoParaData(this._inputData.value),
      this._inputQuantidade.value,
      this._inputValor.value);
  }
  
  _limpaFormulario(){
    this._form.reset();
    this._inputData.focus();
  }
}