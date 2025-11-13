
export abstract class Produto {

    private _etiqueta: number;
    private _nome: string;
    private _preco: number;
    private _quantidade: number;

  constructor(etiqueta: number, nome: string, preco: number, quantidade: number){
    this._etiqueta = etiqueta;
    this._nome = nome;
    this._preco = preco;
    this._quantidade = quantidade;
  }

  // Leitura e Visualização - Get e Set
  public get etiqueta(): number {
    return this._etiqueta
  }

  public set etiqueta(etiqueta: number) {
    this._etiqueta = etiqueta
  }

  public get nome(): string {
    return this._nome
  }

  public set nome(nome: string) {
    this._nome = nome
  }

  public get preco(): number {
    return this._preco
  }

  public set preco(preco: number) {
    this._preco = preco
  }

  public get quantidade(): number {
    return this._quantidade
  }

  public set quantidade(quantidade: number) {
    this._quantidade = quantidade
  }

  // Visualização
  public abstract visualizar(): void
}
