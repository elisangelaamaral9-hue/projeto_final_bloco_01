import { Produto } from "./Produto"

export class Acessorio extends Produto {
  private _modelo: string;

  constructor(modelo: string, etiqueta: number, nome: string, preco: number, quantidade: number) {
    super(etiqueta, nome, preco, quantidade)
    this._modelo = modelo
  }

  public get modelo(): string {
    return this._modelo
  }

  public set modelo(modelo: string) {
    this._modelo = modelo
  }

 //Visualizacao
  public visualizar(): void {
    console.log("\n--------------------------------------")
    console.log("Informações do Produto")
    console.log(`ID: ${this.etiqueta}`)
    console.log(`Nome: ${this.nome}`)
    console.log(`Preço: R$ ${this.preco.toFixed(2)}`)
    console.log(`Quantidade: ${this.quantidade}`)
    console.log(`Tipo: ${this.modelo}`)
    console.log("--------------------------------------")
  }
}
