import { Produto } from "./Produto"

export class Acessorio extends Produto {
  private _marca: string;

  constructor(marca: string, etiqueta: number, nome: string, preco: number, quantidade: number) {
    super(etiqueta, nome, preco, quantidade)
    this._marca = marca
  }

  public get marca(): string {
    return this._marca
  }

  public set marca(marca: string) {
    this._marca = marca
  }

 //Visualizacao
  public visualizar(): void {
    console.log("\n--------------------------------------")
    console.log("Informações do Produto")
    console.log(`Etiqueta: ${this.etiqueta}`)
    console.log(`Nome: ${this.nome}`)
    console.log(`Preço: R$ ${this.preco.toFixed(2)}`)
    console.log(`Quantidade: ${this.quantidade}`)
    console.log(`Marca: ${this.marca}`)
    console.log("--------------------------------------")
  }
}
